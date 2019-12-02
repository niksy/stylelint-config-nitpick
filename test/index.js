'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const isPlainObject = require('lodash/isPlainObject');
const stylelint = require('stylelint');
const pify = require('pify');

/**
 * @param  {string} file
 * @param  {Object} config
 *
 * @returns {Promise}
 */
async function runStylelint(file, config) {
	const code = await pify(fs.readFile)(path.join(__dirname, file), 'utf8');
	try {
		return await stylelint.lint({
			code,
			config
		});
	} catch (error) {
		throw error;
	}
}

/**
 * @param  {string} configFile
 *
 * @returns {Promise<Array>}
 */
async function validateConfiguration(configFile) {
	try {
		const data = await stylelint.lint({
			code: '',
			config: require(configFile)
		});
		return [].concat(
			data.results[0].deprecations,
			data.results[0].invalidOptionWarnings
		);
	} catch (error) {
		return [];
	}
}

/**
 * @param  {Object[]} errors
 *
 * @returns {Array<string>}
 */
function mapErrors(errors) {
	return errors.map((warning) => warning.rule);
}

describe('Default config', function() {
	it('should have config objects as plain objects', function() {
		const config = require('../');

		assert.ok(isPlainObject(config));
		assert.ok(isPlainObject(config.rules));
	});

	it('should not have invalid options or deprecation warnings', async function() {
		const errors = await validateConfiguration('../');
		assert.equal(errors.length, 0);
	});

	it('should return proper validation errors for linted code', async function() {
		try {
			const data = await runStylelint('./fixtures/default.config.css', {
				extends: require.resolve('../')
			});
			const errors = mapErrors(data.results[0].warnings);
			assert.notEqual(errors.indexOf('number-leading-zero'), -1);
			assert.notEqual(
				errors.indexOf('declaration-property-value-blacklist'),
				-1
			);
			assert.notEqual(
				errors.indexOf('declaration-colon-space-after'),
				-1
			);
			assert.notEqual(
				errors.indexOf('plugin/selector-pseudo-class-lvhfa'),
				-1
			);
			assert.notEqual(
				errors.indexOf('plugin/value-list-box-shadow-inset-first'),
				-1
			);
			assert.notEqual(
				errors.indexOf('plugin/number-z-index-constraint'),
				-1
			);
			assert.notEqual(errors.indexOf('order/properties-order'), -1);
			return data;
		} catch (error) {
			assert.ifError(error);
		}
	});
});

describe('SCSS config', function() {
	it('should have config objects as plain objects', function() {
		const config = require('../scss');

		assert.ok(isPlainObject(config));
		assert.ok(isPlainObject(config.rules));
	});

	it('should not have invalid options or deprecation warnings', async function() {
		const errors = await validateConfiguration('../scss');
		assert.equal(errors.length, 0);
	});

	it('should return proper validation errors for linted code', async function() {
		try {
			const data = await runStylelint('./fixtures/scss.config.scss', {
				extends: require.resolve('../scss')
			});
			const errors = mapErrors(data.results[0].warnings);
			assert.notEqual(errors.indexOf('scss/at-function-pattern'), -1);
			assert.notEqual(
				errors.indexOf('scss/at-import-partial-extension-blacklist'),
				-1
			);
			assert.notEqual(errors.indexOf('at-rule-blacklist'), -1);
			assert.equal(errors.indexOf('at-rule-no-unknown'), -1);
			assert.equal(
				errors.indexOf('block-closing-brace-newline-after'),
				-1
			);
			return data;
		} catch (error) {
			assert.ifError(error);
		}
	});
});

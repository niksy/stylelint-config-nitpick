'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const isPlainObject = require('lodash/isPlainObject');
const stylelint = require('stylelint');
const pify = require('pify');

/**
 * @param  {String} file
 * @param  {Object} config
 *
 * @return {Promise}
 */
function runStylelint(file, config) {
	return pify(fs.readFile)(path.join(__dirname, file), 'utf8')
		.then((code) =>
			stylelint.lint({
				code,
				config
			})
		)
		.catch((err) => {
			throw err;
		});
}

/**
 * @param  {String} configFile
 *
 * @return {Promise}
 */
function validateConfiguration(configFile) {
	return stylelint
		.lint({
			code: '',
			config: require(configFile)
		})
		.then(
			(data) =>
				[].concat(
					data.results[0].deprecations,
					data.results[0].invalidOptionWarnings
				),
			() => []
		);
}

/**
 * @param  {Object[]} errors
 *
 * @return {String[]}
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

	it('should not have invalid options or deprecation warnings', function() {
		return validateConfiguration('../').then((errors) => {
			assert.equal(errors.length, 0);
		});
	});

	it('should return proper validation errors for linted code', function() {
		return runStylelint('./fixtures/default.config.css', {
			extends: require.resolve('../')
		})
			.then((data) => {
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
			})
			.catch((err) => {
				assert.ifError(err);
			});
	});
});

describe('SCSS config', function() {
	it('should have config objects as plain objects', function() {
		const config = require('../scss');

		assert.ok(isPlainObject(config));
		assert.ok(isPlainObject(config.rules));
	});

	it('should not have invalid options or deprecation warnings', function() {
		return validateConfiguration('../scss').then((errors) => {
			assert.equal(errors.length, 0);
		});
	});

	it('should return proper validation errors for linted code', function() {
		return runStylelint('./fixtures/scss.config.scss', {
			extends: require.resolve('../scss')
		})
			.then((data) => {
				const errors = mapErrors(data.results[0].warnings);
				assert.notEqual(errors.indexOf('scss/at-function-pattern'), -1);
				assert.notEqual(
					errors.indexOf(
						'scss/at-import-partial-extension-blacklist'
					),
					-1
				);
				assert.notEqual(errors.indexOf('at-rule-blacklist'), -1);
				assert.equal(errors.indexOf('at-rule-no-unknown'), -1);
				assert.equal(
					errors.indexOf('block-closing-brace-newline-after'),
					-1
				);
				return data;
			})
			.catch((err) => {
				assert.ifError(err);
			});
	});
});

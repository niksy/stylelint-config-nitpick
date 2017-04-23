'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const isPlainObject = require('lodash/isPlainObject');
const stylelint = require('stylelint');

/**
 * @param  {String} file
 * @param  {String} configFile
 *
 * @return {Promise}
 */
function runStylelint ( file, configFile ) {
	return stylelint.lint({
		code: fs.readFileSync(path.join(__dirname, file), 'utf8'),
		config: require(configFile)
	})
	.catch(( err ) => {
		throw err;
	});
}

/**
 * @param  {Object[]} errors
 *
 * @return {String[]}
 */
function mapErrors ( errors ) {
	return errors.map(( warning ) => {
		return warning.rule;
	});
}

describe('Config format', function () {

	it('should have config objects as plain objects', function () {
		const config = require('../');
		assert.ok(isPlainObject(config));
		assert.ok(isPlainObject(config.rules));
	});

});

describe('Default config', function () {

	it('should return proper validation errors for linted code', function () {
		return runStylelint('./fixtures/default-config.css', '../')
			.then(( data ) => {
				const errors = mapErrors(data.results[0].warnings);
				assert.notEqual(errors.indexOf('number-leading-zero'), -1);
				assert.notEqual(errors.indexOf('declaration-property-value-blacklist'), -1);
				assert.notEqual(errors.indexOf('declaration-colon-space-after'), -1);
				assert.notEqual(errors.indexOf('selector-no-type'), -1);
				assert.notEqual(errors.indexOf('plugin/selector-pseudo-class-lvhfa'), -1);
				assert.notEqual(errors.indexOf('plugin/value-list-box-shadow-inset-first'), -1);
				assert.notEqual(errors.indexOf('plugin/number-z-index-constraint'), -1);
				return data;
			})
			.catch(( err ) => {
				assert.ifError(err);
			});
	});

});

describe('SCSS config', function () {

	it('should return proper validation errors for linted code', function () {
		return runStylelint('./fixtures/scss-config.scss', '../scss')
			.then(( data ) => {
				const errors = mapErrors(data.results[0].warnings);
				assert.notEqual(errors.indexOf('scss/at-function-pattern'), -1);
				assert.notEqual(errors.indexOf('scss/at-import-partial-extension-blacklist'), -1);
				assert.notEqual(errors.indexOf('at-rule-blacklist'), -1);
				assert.equal(errors.indexOf('at-rule-no-unknown'), -1);
				assert.equal(errors.indexOf('block-closing-brace-newline-after'), -1);
				return data;
			})
			.catch(( err ) => {
				assert.ifError(err);
			});
	});

});

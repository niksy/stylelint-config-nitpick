var fs = require('fs');
var path = require('path');
var assert = require('assert');
var isPlainObject = require('lodash/isPlainObject');
var stylelint = require('stylelint');

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
	.catch(function ( err ) {
		throw err;
	});
}

/**
 * @param  {Object[]} errors
 *
 * @return {String[]}
 */
function mapErrors ( errors ) {
	return errors.map(function ( warning ) {
		return warning.rule;
	});
}

describe('Config format', function () {

	it('config objects should be plain objects', function () {
		var config = require('../');
		assert.ok(isPlainObject(config));
		assert.ok(isPlainObject(config.rules));
	});

});

describe('Default config', function () {

	it('linted code should return proper validation errors', function () {
		return runStylelint('./fixtures/default-config.css', '../')
			.then(function ( data ) {
				var errors = mapErrors(data.results[0].warnings);
				assert.notEqual(errors.indexOf('number-leading-zero'), -1);
				assert.notEqual(errors.indexOf('declaration-property-value-blacklist'), -1);
				assert.notEqual(errors.indexOf('declaration-colon-space-after'), -1);
				assert.notEqual(errors.indexOf('declaration-colon-space-after'), -1);
				assert.notEqual(errors.indexOf('block-no-single-line'), -1);
				assert.notEqual(errors.indexOf('selector-no-type'), -1);
				assert.notEqual(errors.indexOf('plugin/selector-pseudo-class-lvhfa'), -1);
				assert.notEqual(errors.indexOf('plugin/value-list-box-shadow-inset-first'), -1);
				assert.notEqual(errors.indexOf('plugin/number-z-index-constraint'), -1);
				return data;
			})
			.catch(function ( err ) {
				assert.ifError(err);
			});
	});

});

describe('SCSS config', function () {

	it('linted code should return proper validation errors', function () {
		return runStylelint('./fixtures/scss-config.scss', '../scss')
			.then(function ( data ) {
				var errors = mapErrors(data.results[0].warnings);
				assert.notEqual(errors.indexOf('scss/at-function-pattern'), -1);
				assert.notEqual(errors.indexOf('scss/at-import-partial-extension-blacklist'), -1);
				assert.notEqual(errors.indexOf('at-rule-blacklist'), -1);
				return data;
			})
			.catch(function ( err ) {
				assert.ifError(err);
			});
	});

});

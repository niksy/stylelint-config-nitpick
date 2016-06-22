/* eslint-disable global-require */

var assert = require('assert');
var isPlainObject = require('lodash/isPlainObject');
var stylelint = require('stylelint');

function runStylelint ( code, configFile ) {
	return stylelint.lint({
		code: code,
		config: require(configFile)
	})
	.catch(function ( err ) {
		throw err;
	});
}

describe('Dependencies', function () {

	it('all "dependencies" are defined in "peerDependencies"', function () {
		var pkg = require('../package.json');
		assert.deepStrictEqual(pkg.dependencies, pkg.peerDependencies);
	});

});

describe('Config format', function () {

	it('config objects should be plain objects', function () {
		var config = require('../');
		assert.ok(isPlainObject(config));
		assert.ok(isPlainObject(config.rules));
	});

});

describe('Default config', function () {

	it('linted code should return proper validation errors', function () {
		return runStylelint('a { top: .5em; border: none; }\n', '../')
			.then(function ( data ) {
				var errors = data.results[0].warnings;
				assert.equal(errors[0].rule, 'number-leading-zero');
				assert.equal(errors[1].rule, 'value-border-zero');
				assert.equal(errors[2].rule, 'declaration-colon-space-after');
				assert.equal(errors[3].rule, 'declaration-colon-space-after');
				assert.equal(errors[4].rule, 'block-no-single-line');
				assert.equal(errors[5].rule, 'selector-no-type');
				return data;
			})
			.catch(function ( err ) {
				assert.ifError(err);
			});
	});

});

describe('SCSS config', function () {

	it('linted code should return proper validation errors', function () {
		return runStylelint('@import \'path/to/foo.scss\';\n\n@function fooBar {\n\t@return 1;\n}\n\na{ @debug 1; }', '../scss')
			.then(function ( data ) {
				var errors = data.results[0].warnings;
				assert.equal(errors[0].rule, 'scss/at-function-pattern');
				assert.equal(errors[1].rule, 'scss/at-import-no-partial-extension');
				assert.equal(errors[2].rule, 'at-rule-no-debug');
				return data;
			})
			.catch(function ( err ) {
				assert.ifError(err);
			});
	});

});

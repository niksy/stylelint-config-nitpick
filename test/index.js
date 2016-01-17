/* eslint-env mocha */

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

describe('Default config', function () {

	var config = require('../');

	it('config objects should be plain objects', function () {
		assert.ok(isPlainObject(config));
		assert.ok(isPlainObject(config.rules));
	});

	it('linted code should return proper validation errors', function () {
		return runStylelint('a { top: .5em; }\n', '../')
			.then(function ( data ) {
				var errors = data.results[0].warnings;
				assert.equal(errors[0].rule, 'number-leading-zero');
				assert.equal(errors[1].rule, 'declaration-colon-space-after');
				assert.equal(errors[2].rule, 'declaration-block-no-single-line');
				assert.equal(errors[3].rule, 'selector-no-type');
			});
	});

});

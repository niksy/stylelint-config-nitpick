/* eslint-disable global-require */

var assert = require('assert');
var difference = require('lodash.difference');

describe('Default config rules presence', function () {

	var defaultConfig = Object.keys(require('stylelint').rules);
	var customConfig = Object.keys(require('../').rules);

	it('all default config rules present in custom config', function () {
		var list = difference(defaultConfig, customConfig);
		assert.equal(list.length, 0, 'Following rules are not present in custom config: \n' + list.join(', \n'));
	});

	it('all custom config rules present in default config', function () {
		var list = difference(customConfig, defaultConfig);
		assert.equal(list.length, 0, 'Following rules are not present in default config: \n' + list.join(', \n'));
	});

});

describe('stylelint-scss config rules presence', function () {

	var scssConfig = require('stylelint-scss').default.map(function ( rule ) {
		return rule.ruleName;
	});
	var customScssConfig = Object.keys(require('../scss').rules);

	it('all default config rules present in custom config', function () {
		var list = difference(scssConfig, customScssConfig);
		assert.equal(list.length, 0, 'Following rules are not present in custom config: \n' + list.join(', \n'));
	});

	it('all custom config rules present in default config', function () {
		var list = difference(customScssConfig, scssConfig);
		assert.equal(list.length, 0, 'Following rules are not present in default config: \n' + list.join(', \n'));
	});

});
/* eslint-disable global-require */

var assert = require('assert');
var difference = require('lodash.difference');
var without = require('lodash.without');

describe('Default config rules presence', function () {

	var defaultConfig = without([].concat(
		Object.keys(require('stylelint').rules),
		require('stylelint-value-border-zero').ruleName,
		require('stylelint-selector-pseudo-class-lvhfa').ruleName,
		require('stylelint-value-list-box-shadow-inset-first').ruleName,
		require('stylelint-number-z-index-constraint').ruleName
	), 'number-zero-length-no-unit');
	var customConfig = Object.keys(require('../').rules);

	it('all default config rules present in custom config', function () {
		var list = difference(defaultConfig, customConfig);
		assert.equal(list.length, 0, 'Following rules are not present in custom config and must be added: \n' + list.join(', \n'));
	});

	it('all custom config rules present in default config', function () {
		var list = difference(customConfig, defaultConfig);
		assert.equal(list.length, 0, 'Following rules are not present in default config and must be removed: \n' + list.join(', \n'));
	});

});

describe('stylelint-scss config rules presence', function () {

	var scssConfig = without([].concat(
		require('stylelint-scss').default.map(function ( rule ) {
			return rule.ruleName;
		}),
		require('stylelint-at-rule-no-debug').ruleName,
		'at-rule-no-unknown'
	), 'scss/at-import-no-partial-extension');
	var customScssConfig = Object.keys(require('../scss').rules);

	it('all default config rules present in custom config', function () {
		var list = difference(scssConfig, customScssConfig);
		assert.equal(list.length, 0, 'Following rules are not present in custom config and must be added: \n' + list.join(', \n'));
	});

	it('all custom config rules present in default config', function () {
		var list = difference(customScssConfig, scssConfig);
		assert.equal(list.length, 0, 'Following rules are not present in default SCSS config and must be removed: \n' + list.join(', \n'));
	});

});

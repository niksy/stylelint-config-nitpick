'use strict';

const assert = require('assert');
const difference = require('lodash.difference');
const without = require('lodash.without');

describe('Default config rules presence', function () {

	const defaultConfig = without([].concat(
		Object.keys(require('stylelint').rules),
		require('stylelint-selector-pseudo-class-lvhfa').ruleName,
		require('stylelint-value-list-box-shadow-inset-first').ruleName,
		require('stylelint-number-z-index-constraint').ruleName,
		require('stylelint-order').map(( rule ) => {
			return rule.ruleName;
		})
	),
		'number-zero-length-no-unit',
		'no-indistinguishable-colors',
		'no-unsupported-browser-features',
		'time-no-imperceptible',
		'custom-property-no-outside-root',
		'declaration-block-no-ignored-properties',
		'declaration-block-properties-order',
		'block-no-single-line',
		'selector-no-empty',
		'selector-root-no-composition',
		'root-no-standard-properties',
		'rule-nested-empty-line-before',
		'rule-non-nested-empty-line-before',
		'media-feature-no-missing-punctuation',
		'stylelint-disable-reason',
		'no-browser-hacks',
		'order/properties-alphabetical-order',
		'order/declaration-block-order',
		'order/declaration-block-properties-order',
		'order/declaration-block-properties-alphabetical-order',
		'order/declaration-block-properties-specified-order',
		'order/declaration-block-property-groups-structure'
	);
	const customConfig = Object.keys(require('../').rules);

	it('should have all default config rules present in custom config', function () {
		const list = difference(defaultConfig, customConfig);
		assert.equal(list.length, 0, `Following rules are not present in custom config and must be added: \n${list.join(', \n')}`);
	});

	it('should have all custom config rules present in default config', function () {
		const list = difference(customConfig, defaultConfig);
		assert.equal(list.length, 0, `Following rules are not present in default config and must be removed: \n${list.join(', \n')}`);
	});

});

describe('SCSS config rules presence', function () {

	const scssConfig = without([].concat(
		require('stylelint-scss').default.map(function ( rule ) {
			return rule.ruleName;
		}),
		'at-rule-no-unknown',
		'at-rule-blacklist',
		'no-browser-hacks',
		'at-rule-empty-line-before',
		'block-opening-brace-newline-after',
		'block-closing-brace-newline-after',
		'no-duplicate-selectors'
	),
		'scss/at-import-no-partial-extension',
		'scss/at-mixin-no-argumentless-call-parentheses'
	);
	const customScssConfig = Object.keys(require('../scss').rules);

	it('should have all default config rules present in custom config', function () {
		const list = difference(scssConfig, customScssConfig);
		assert.equal(list.length, 0, `Following rules are not present in custom config and must be added: \n${list.join(', \n')}`);
	});

	it('should have all custom config rules present in default config', function () {
		const list = difference(customScssConfig, scssConfig);
		assert.equal(list.length, 0, `Following rules are not present in default SCSS config and must be removed: \n${list.join(', \n')}`);
	});

});

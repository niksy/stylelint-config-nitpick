'use strict';

module.exports = {

	plugins: [
		'stylelint-scss'
	],

	rules: {

		// @else
		'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-else-closing-brace-space-after': [ 'always-intermediate', { severity: 'warning' }],
		'scss/at-else-empty-line-before': [ 'never', { severity: 'warning' }],
		'scss/at-else-if-parentheses-space-before': ['always'],

		// @extend
		'scss/at-extend-no-missing-placeholder': true,

		// @function
		'scss/at-function-pattern': [ /^[\da-z-_]+$/, { severity: 'warning' }],
		'scss/at-function-named-arguments': [ 'always', { ignore: ['single-argument'], severity: 'warning' }],
		'scss/at-function-parentheses-space-before': 'always',

		// @if
		'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-if-closing-brace-space-after': [ 'always-intermediate', { severity: 'warning' }],

		// @import
		'scss/at-import-no-partial-leading-underscore': true,
		'scss/at-import-partial-extension-blacklist': [[ 'scss', 'sass' ], { severity: 'warning' }],
		'scss/at-import-partial-extension-whitelist': null,

		// @mixin
		'scss/at-mixin-argumentless-call-parentheses': [ 'always', { severity: 'warning' }],
		'scss/at-mixin-pattern': [ /^[\da-z-_]+$/, { severity: 'warning' }],
		'scss/at-mixin-named-arguments': [ 'always', { ignore: ['single-argument'], severity: 'warning' }],
		'scss/at-mixin-parentheses-space-before': 'always',

		// @rule
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': [ true, { severity: 'warning' }],

		// @debug
		'at-rule-blacklist': [['debug'], { severity: 'warning' }],

		// $variable
		'scss/dollar-variable-colon-newline-after': null,
		'scss/dollar-variable-colon-space-after': 'always',
		'scss/dollar-variable-colon-space-before': 'never',
		'scss/dollar-variable-empty-line-before': [ 'always', { except: [ 'first-nested', 'after-comment', 'after-dollar-variable' ] }],
		'scss/dollar-variable-no-missing-interpolation': true,
		'scss/dollar-variable-pattern': [ /^[\da-z-_]+$/, { severity: 'warning' }],
		'scss/dollar-variable-default': null,

		// %placeholder
		'scss/percent-placeholder-pattern': [ /^[\da-z-_]+$/, { severity: 'warning' }],

		// //comment
		'scss/double-slash-comment-empty-line-before': null,
		'scss/double-slash-comment-inline': null,
		'scss/double-slash-comment-whitespace-inside': 'always',

		// Declaration
		'scss/declaration-nested-properties': 'never',
		'scss/declaration-nested-properties-no-divided-groups': null,

		// Media feature
		'scss/media-feature-value-dollar-variable': null,

		// Operator
		'scss/operator-no-newline-after': true,
		'scss/operator-no-newline-before': true,
		'scss/operator-no-unspaced': true,

		// Partial
		'scss/partial-no-import': null,

		// Selector
		'scss/selector-no-redundant-nesting-selector': [ true, { severity: 'warning' }],

		// General / Sheet
		'scss/no-duplicate-dollar-variables': true,
		'scss/no-dollar-variables': null,

		// Other
		'at-rule-empty-line-before': [ 'always', {
			except: ['blockless-after-blockless'],
			ignore: [ 'blockless-after-blockless', 'after-comment' ],
			ignoreAtRules: [ 'if', 'else' ]
		}],

		'block-opening-brace-newline-after': [ 'always-multi-line', {
			ignoreAtRules: [ 'if', 'else' ]
		}],
		'block-closing-brace-newline-after': [ 'always', {
			ignoreAtRules: [ 'if', 'else' ]
		}],

		'no-duplicate-selectors': null
	}
};

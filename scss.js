'use strict';

module.exports = {
	'extends': [
		'./'
	].map(require.resolve),

	plugins: [
		'stylelint-scss'
	],

	rules: {

		// @else
		'scss/at-else-closing-brace-newline-after': true,
		'scss/at-else-closing-brace-space-after': ['always-intermediate', { severity: 'warning' }],
		'scss/at-else-empty-line-before': ['never', { severity: 'warning' }],

		// @extend
		'scss/at-extend-no-missing-placeholder': true,

		// @function
		'scss/at-function-pattern': [/^[\da-z-_]+$/, { severity: 'warning' }],

		// @if
		'scss/at-if-closing-brace-newline-after': true,
		'scss/at-if-closing-brace-space-after': ['always-intermediate', { severity: 'warning' }],

		// @import
		'scss/at-import-no-partial-leading-underscore': true,
		'scss/at-import-partial-extension-blacklist': [['scss', 'sass'], { severity: 'warning' }],
		'scss/at-import-partial-extension-whitelist': null,

		// @mixin
		'scss/at-mixin-argumentless-call-parentheses': ['always', { severity: 'warning' }],
		'scss/at-mixin-pattern': [/^[\da-z-_]+$/, { severity: 'warning' }],

		// @debug
		'at-rule-blacklist': [['debug'], { severity: 'warning' }],

		// $variable
		'scss/dollar-variable-colon-newline-after': null,
		'scss/dollar-variable-colon-space-after': 'always',
		'scss/dollar-variable-colon-space-before': 'never',
		'scss/dollar-variable-empty-line-before': 'never',
		'scss/dollar-variable-no-missing-interpolation': true,
		'scss/dollar-variable-pattern': [/^[\da-z-_]+$/, { severity: 'warning' }],

		// %placeholder
		'scss/percent-placeholder-pattern': [/^[\da-z-_]+$/, { severity: 'warning' }],

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
		'scss/selector-no-redundant-nesting-selector': [true, { severity: 'warning' }],

		// Other
		'at-rule-no-unknown': [true, {
			ignoreAtRules: ['extend', 'at-root', 'debug', 'warn', 'error', 'if', 'else', 'for', 'each', 'while', 'mixin', 'include', 'content', 'return', 'function'],
			severity: 'warning'
		}],
		'at-rule-empty-line-before': ['always', {
			except: ['blockless-group'],
			ignore: ['blockless-group', 'after-comment'],
			ignoreAtRules: ['else']
		}],

		// https://github.com/stylelint/stylelint/issues/871
		'no-browser-hacks': null,

		'block-opening-brace-newline-after': ['always-multi-line', {
			ignoreAtRules: ['if', 'else']
		}],
		'block-closing-brace-newline-after': ['always', {
			ignoreAtRules: ['if', 'else']
		}],

		'no-duplicate-selectors': null
	}
};

'use strict';

module.exports = {
	plugins: ['stylelint-scss'],
	customSyntax: 'postcss-scss',
	rules: {
		'scss/at-each-key-value-single-line': [true, { severity: 'warning' }],
		'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-else-closing-brace-space-after': [
			'always-intermediate',
			{ severity: 'warning' }
		],
		'scss/at-else-empty-line-before': ['never', { severity: 'warning' }],
		'scss/at-else-if-parentheses-space-before': ['always'],
		'scss/at-extend-no-missing-placeholder': true,
		'scss/at-function-pattern': [/^[\d_a-z-]+$/],
		'scss/at-function-named-arguments': [
			'always',
			{ ignore: ['single-argument'], severity: 'warning' }
		],
		'scss/at-function-parentheses-space-before': 'always',
		'function-no-unknown': null,
		'scss/function-no-unknown': [true, { severity: 'warning' }],
		'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-if-closing-brace-space-after': [
			'always-intermediate',
			{ severity: 'warning' }
		],
		'scss/at-if-no-null': null,
		'scss/at-import-no-partial-leading-underscore': true,
		'scss/at-import-partial-extension-blacklist': [
			['scss', 'sass'],
			{ severity: 'warning' }
		],
		'scss/at-import-partial-extension-whitelist': null,
		'scss/at-import-partial-extension': 'never',
		'scss/at-mixin-argumentless-call-parentheses': [
			'always',
			{ severity: 'warning' }
		],
		'scss/at-mixin-pattern': [/^[\d_a-z-]+$/],
		'scss/at-mixin-named-arguments': [
			'always',
			{ ignore: ['single-argument'], severity: 'warning' }
		],
		'scss/at-mixin-parentheses-space-before': 'always',
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': [true, { severity: 'warning' }],
		'scss/at-rule-conditional-no-parentheses': null,
		'scss/at-use-no-unnamespaced': null,
		'at-rule-disallowed-list': [['debug'], { severity: 'warning' }],
		'scss/dollar-variable-colon-newline-after': null,
		'scss/dollar-variable-colon-space-after': 'always',
		'scss/dollar-variable-colon-space-before': 'never',
		'scss/dollar-variable-empty-line-before': null,
		'scss/dollar-variable-no-missing-interpolation': true,
		'scss/dollar-variable-pattern': [/^[\d_a-z-]+$/],
		'scss/dollar-variable-default': null,
		'scss/dollar-variable-no-namespaced-assignment': true,
		'scss/percent-placeholder-pattern': [/^[\d_a-z-]+$/],
		'scss/dollar-variable-empty-line-after': [
			'always',
			{ except: ['before-dollar-variable'] }
		],
		'scss/dollar-variable-first-in-block': [
			true,
			{ ignore: ['comments', 'imports'] }
		],
		'scss/double-slash-comment-empty-line-before': null,
		'scss/double-slash-comment-inline': null,
		'scss/double-slash-comment-whitespace-inside': 'always',
		'scss/comment-no-loud': null,
		'scss/comment-no-empty': null,
		'scss/dimension-no-non-numeric-values': true,
		'scss/function-quote-no-quoted-strings-inside': null,
		'scss/function-unquote-no-unquoted-strings-inside': null,
		'scss/function-color-relative': [true, { severity: 'warning' }],
		'scss/map-keys-quotes': ['always', { severity: 'warning' }],
		'scss/declaration-nested-properties': 'never',
		'scss/declaration-nested-properties-no-divided-groups': null,
		'scss/media-feature-value-dollar-variable': null,
		'scss/operator-no-newline-after': true,
		'scss/operator-no-newline-before': true,
		'scss/operator-no-unspaced': true,
		'scss/partial-no-import': null,
		'scss/selector-no-redundant-nesting-selector': [
			true,
			{ severity: 'warning' }
		],
		'scss/selector-nest-combinators': null,
		'scss/selector-no-union-class-name': null,
		'scss/no-duplicate-mixins': true,
		'scss/no-duplicate-dollar-variables': true,
		'scss/no-dollar-variables': null,
		'scss/no-global-function-names': null,
		'at-rule-empty-line-before': [
			'always',
			{
				except: ['blockless-after-blockless'],
				ignore: [
					'blockless-after-blockless',
					'after-comment',
					'inside-block'
				],
				ignoreAtRules: ['if', 'else']
			}
		],
		'block-closing-brace-newline-after': [
			'always',
			{
				ignoreAtRules: ['if', 'else']
			}
		],
		'no-duplicate-selectors': null,
		'annotation-no-unknown': [
			true,
			{
				ignoreAnnotations: ['default', 'global']
			}
		],
		'scss/at-root-no-redundant': true,
		'scss/at-use-no-redundant-alias': null,
		'scss/block-no-redundant-nesting': null,
		'scss/function-calculation-no-interpolation': true,
		'scss/function-disallowed-list': null,
		'scss/load-no-partial-leading-underscore': true,
		'scss/property-no-unknown': null
	}
};

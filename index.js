'use strict';

module.exports = {
	plugins: [
		'stylelint-selector-pseudo-class-lvhfa',
		'stylelint-value-list-box-shadow-inset-first',
		'stylelint-number-z-index-constraint',
		'stylelint-order'
	],

	rules: {
		// Other
		'plugin/selector-pseudo-class-lvhfa': [true, { severity: 'warning' }],
		'plugin/value-list-box-shadow-inset-first': [
			true,
			{ severity: 'warning' }
		],
		'plugin/number-z-index-constraint': {
			min: 10,
			max: 9999
		},

		'order/order': [
			[
				'custom-properties',
				'dollar-variables',
				{
					type: 'at-rule',
					name: 'extend'
				},
				{
					type: 'at-rule',
					name: 'include'
				},
				{
					type: 'at-rule',
					name: 'include',
					hasBlock: true
				},
				'at-rules',
				'declarations',
				{
					type: 'rule',
					selector: /^&::?[\w-]+$/
				},
				'rules',
				{
					type: 'at-rule',
					name: 'media',
					hasBlock: true
				},
				{
					type: 'at-rule',
					name: 'supports',
					hasBlock: true
				},
				'at-variables'
			],
			{ unspecified: 'bottom', severity: 'warning' }
		],
		'order/properties-order': [
			[
				'content',
				'box-sizing',
				'display',
				'position',
				'top',
				'right',
				'bottom',
				'left',
				'z-index',
				'width',
				'height',
				'min-width',
				'min-height',
				'max-width',
				'max-height',
				'float',
				'clear',
				'flex',
				'columns',
				'column',
				'grid',
				'margin',
				'margin-top',
				'margin-right',
				'margin-bottom',
				'margin-left',
				'padding',
				'padding-top',
				'padding-right',
				'padding-bottom',
				'padding-left',
				'border',
				'border-top',
				'border-right',
				'border-bottom',
				'border-left',
				'border-radius',
				'border-top-left-radius',
				'border-top-right-radius',
				'border-bottom-right-radius',
				'border-bottom-left-radius',
				'overflow',
				'visibility',
				'opacity',
				'font',
				'font-style',
				'font-weight',
				'font-size',
				'line-height',
				'font-family',
				'vertical-align',
				'text-align',
				'text-transform',
				'text',
				'white-space',
				'word-spacing',
				'letter-spacing',
				'background',
				'background-color',
				'background-image',
				'background-repeat',
				'background-position',
				'background-size',
				'color',
				'box-shadow',
				'transform',
				'transition',
				'animation'
			],
			{ unspecified: 'bottom', severity: 'warning' }
		],
		'order/properties-alphabetical-order': null,

		// Color
		'color-hex-alpha': null,
		'color-hex-case': 'lower',
		'color-hex-length': 'short',
		'color-named': ['never', { severity: 'warning' }],
		'color-no-hex': null,
		'color-no-invalid-hex': true,

		// Custom property
		'custom-property-no-missing-var-function': true,

		// Font family
		'font-family-name-quotes': [
			'always-where-recommended',
			{ severity: 'warning' }
		],
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,

		// Font weight
		'font-weight-notation': 'named-where-possible',

		// Function
		'function-disallowed-list': null,
		'function-calc-no-unspaced-operator': true,
		'function-comma-newline-after': null,
		'function-comma-newline-before': null,
		'function-comma-space-after': 'always',
		'function-comma-space-before': 'never',
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-max-empty-lines': 0,
		'function-name-case': 'lower',
		'function-parentheses-newline-inside': null,
		'function-parentheses-space-inside': 'never',
		'function-url-no-scheme-relative': null,
		'function-url-scheme-allowed-list': null,
		'function-url-scheme-disallowed-list': null,
		'function-url-quotes': ['always', { severity: 'warning' }],
		'function-allowed-list': null,
		'function-whitespace-after': 'always',
		'function-no-unknown': [true, { severity: 'warning' }],

		// Keyframes
		'keyframes-name-pattern': null,

		// Number
		'number-leading-zero': 'always',
		'number-max-precision': 5,
		'number-no-trailing-zeros': null,

		// String
		'string-no-newline': true,
		'string-quotes': ['single', { severity: 'warning' }],

		// Length
		'length-zero-no-unit': [true, { severity: 'warning' }],

		// Time
		'time-min-milliseconds': [100, { severity: 'warning' }],

		// Unit
		'unit-disallowed-list': null,
		'unit-case': 'lower',
		'unit-no-unknown': [true, { severity: 'warning' }],
		'unit-allowed-list': null,

		// Value
		'value-no-vendor-prefix': true,

		// Value list
		'value-keyword-case': 'lower',
		'value-list-comma-newline-after': null,
		'value-list-comma-newline-before': null,
		'value-list-comma-space-after': 'always',
		'value-list-comma-space-before': 'never',
		'value-list-max-empty-lines': null,

		// Custom property
		'custom-property-empty-line-before': null,
		'custom-property-pattern': null,

		// Shorthand property
		'shorthand-property-no-redundant-values': [
			true,
			{ severity: 'warning' }
		],

		// Property
		'property-disallowed-list': null,
		'property-case': 'lower',
		'property-no-unknown': null,
		'property-no-vendor-prefix': true,
		'property-allowed-list': null,

		// Keyframe declaration
		'keyframe-declaration-no-important': true,

		// Declaration
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-colon-newline-after': [
			'always-multi-line',
			{ severity: 'warning' }
		],
		'declaration-colon-space-after': 'always',
		'declaration-colon-space-before': 'never',
		'declaration-empty-line-before': null,
		'declaration-no-important': null,
		'declaration-property-unit-disallowed-list': null,
		'declaration-property-unit-allowed-list': null,
		'declaration-property-value-disallowed-list': [
			{
				'/^border/': ['none'],
				'/^outline/': ['none']
			},
			{ severity: 'warning' }
		],
		'declaration-property-value-allowed-list': null,
		'declaration-property-max-values': null,

		// Declaration block
		'declaration-block-no-duplicate-properties': [
			true,
			{ ignore: ['consecutive-duplicates'] }
		],
		'declaration-block-no-redundant-longhand-properties': [
			true,
			{ severity: 'warning' }
		],
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-semicolon-newline-after': null,
		'declaration-block-semicolon-newline-before': null,
		'declaration-block-semicolon-space-after': 'always-single-line',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-block-single-line-max-declarations': null,
		'declaration-block-trailing-semicolon': 'always',
		'declaration-block-no-duplicate-custom-properties': true,

		// Block
		'block-closing-brace-empty-line-before': 'never',
		'block-closing-brace-newline-after': 'always',
		'block-closing-brace-newline-before': 'always',
		'block-closing-brace-space-after': null,
		'block-closing-brace-space-before': 'always-single-line',
		'block-no-empty': [true, { severity: 'warning' }],
		'block-opening-brace-newline-after': 'always-multi-line',
		'block-opening-brace-newline-before': null,
		'block-opening-brace-space-after': 'always-single-line',
		'block-opening-brace-space-before': 'always',

		// Selector
		'selector-attribute-brackets-space-inside': 'never',
		'selector-attribute-operator-disallowed-list': null,
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		'selector-attribute-operator-allowed-list': null,
		'selector-attribute-quotes': 'always',
		'selector-class-pattern': null,
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-descendant-combinator-no-non-space': true,
		'selector-id-pattern': null,
		'selector-max-compound-selectors': 4,
		'selector-max-specificity': ['0,3,0', { severity: 'warning' }],
		'selector-nested-pattern': null,
		'selector-no-qualifying-type': true,
		'selector-no-vendor-prefix': true,
		'selector-pseudo-class-disallowed-list': null,
		'selector-pseudo-class-case': 'lower',
		'selector-pseudo-class-no-unknown': [true, { severity: 'warning' }],
		'selector-pseudo-class-parentheses-space-inside': 'never',
		'selector-pseudo-class-allowed-list': null,
		'selector-pseudo-element-case': 'lower',
		'selector-pseudo-element-colon-notation': null,
		'selector-pseudo-element-no-unknown': [true, { severity: 'warning' }],
		'selector-type-case': 'lower',
		'selector-type-no-unknown': [true, { severity: 'warning' }],
		'selector-max-empty-lines': 0,
		'selector-combinator-disallowed-list': [
			['>', '~', '+'],
			{ severity: 'warning' }
		],
		'selector-combinator-allowed-list': null,
		'selector-max-attribute': null,
		'selector-max-class': [3, { severity: 'warning' }],
		'selector-max-combinators': 3,
		'selector-max-id': 1,
		'selector-max-pseudo-class': [3, { severity: 'warning' }],
		'selector-max-type': 3,
		'selector-max-universal': 1,
		'selector-pseudo-element-disallowed-list': null,
		'selector-pseudo-element-allowed-list': null,
		'selector-attribute-name-disallowed-list': null,
		'selector-disallowed-list': null,

		// Selector list
		'selector-list-comma-newline-after': 'always-multi-line',
		'selector-list-comma-newline-before': null,
		'selector-list-comma-space-after': 'always-single-line',
		'selector-list-comma-space-before': 'never',

		// Rule
		'rule-empty-line-before': ['always', { severity: 'warning' }],

		// Media feature
		'media-feature-colon-space-after': 'always',
		'media-feature-colon-space-before': 'never',
		'media-feature-name-disallowed-list': null,
		'media-feature-name-case': 'lower',
		'media-feature-name-no-unknown': [true, { severity: 'warning' }],
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-name-allowed-list': null,
		'media-feature-parentheses-space-inside': 'never',
		'media-feature-range-operator-space-after': 'always',
		'media-feature-range-operator-space-before': 'always',
		'media-feature-name-value-allowed-list': null,

		// Custom media
		'custom-media-pattern': null,

		// Media query list
		'media-query-list-comma-newline-after': 'always-multi-line',
		'media-query-list-comma-newline-before': null,
		'media-query-list-comma-space-after': 'always-single-line',
		'media-query-list-comma-space-before': 'never',

		// At-rule
		'at-rule-disallowed-list': null,
		'at-rule-empty-line-before': [
			'always',
			{
				except: ['blockless-after-blockless'],
				ignore: [
					'blockless-after-blockless',
					'after-comment',
					'inside-block'
				]
			}
		],
		'at-rule-name-case': 'lower',
		'at-rule-name-newline-after': [
			'always-multi-line',
			{ severity: 'warning' }
		],
		'at-rule-name-space-after': 'always-single-line',
		'at-rule-no-unknown': [true, { severity: 'warning' }],
		'at-rule-no-vendor-prefix': true,
		'at-rule-semicolon-newline-after': 'always',
		'at-rule-semicolon-space-before': 'never',
		'at-rule-allowed-list': null,
		'at-rule-property-required-list': null,

		// Comment
		'comment-empty-line-before': null,
		'comment-no-empty': null,
		'comment-whitespace-inside': 'always',
		'comment-word-disallowed-list': null,
		'comment-pattern': null,

		// General / Sheet
		indentation: 'tab',
		'max-empty-lines': [1, { severity: 'warning' }],
		'max-line-length': null,
		'max-nesting-depth': [
			4,
			{
				ignore: 'blockless-at-rules',
				severity: 'warning'
			}
		],
		'no-descending-specificity': [true, { severity: 'warning' }],
		'no-duplicate-selectors': [true, { severity: 'warning' }],
		'no-empty-source': [true, { severity: 'warning' }],
		'no-eol-whitespace': true,
		'no-extra-semicolons': true,
		'no-invalid-double-slash-comments': null,
		'no-missing-end-of-source-newline': true,
		'no-unknown-animations': null,
		'no-duplicate-at-import-rules': true,
		linebreaks: 'unix',
		'no-empty-first-line': true,
		'unicode-bom': null,
		'no-invalid-position-at-import-rule': true,
		'no-irregular-whitespace': true,

		// Limit language features
		'alpha-value-notation': ['number'],
		'color-function-notation': ['legacy'],
		'hue-degree-notation': null,

		// Named grid areas
		'named-grid-areas-no-invalid': true,

		// Rules
		'rule-selector-property-disallowed-list': null,

		// Unknown
		'annotation-no-unknown': true,

		// Notation
		'import-notation': null,
		'keyframe-selector-notation': ['percentage', { severity: 'warning' }],
		'selector-not-notation': ['complex', { severity: 'warning' }],

		// Duplicate
		'keyframe-block-no-duplicate-selectors': true
	}
};

/* eslint-disable multiline-comment-style */

'use strict';

module.exports = {
	plugins: [
		'stylelint-selector-pseudo-class-lvhfa',
		'stylelint-value-list-box-shadow-inset-first',
		'stylelint-number-z-index-constraint',
		'stylelint-order'
	],
	rules: {
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
		'color-hex-alpha': null,
		'color-hex-length': 'short',
		'color-named': ['never', { severity: 'warning' }],
		'color-no-hex': null,
		'color-no-invalid-hex': true,
		'custom-property-no-missing-var-function': true,
		'font-family-name-quotes': [
			'always-where-recommended',
			{ severity: 'warning' }
		],
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,
		'font-weight-notation': 'named-where-possible',
		'function-disallowed-list': null,
		'function-calc-no-unspaced-operator': true,
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-name-case': 'lower',
		'function-url-no-scheme-relative': null,
		'function-url-scheme-allowed-list': null,
		'function-url-scheme-disallowed-list': null,
		'function-url-quotes': ['always', { severity: 'warning' }],
		'function-allowed-list': null,
		'function-no-unknown': [true, { severity: 'warning' }],
		'keyframes-name-pattern': null,
		'number-max-precision': 5,
		'string-no-newline': true,
		'length-zero-no-unit': [true, { severity: 'warning' }],
		'time-min-milliseconds': [100, { severity: 'warning' }],
		'unit-disallowed-list': null,
		'unit-no-unknown': [true, { severity: 'warning' }],
		'unit-allowed-list': null,
		'value-no-vendor-prefix': true,
		'value-keyword-case': 'lower',
		'custom-property-empty-line-before': null,
		'custom-property-pattern': null,
		'shorthand-property-no-redundant-values': [
			true,
			{ severity: 'warning' }
		],
		'property-disallowed-list': null,
		'property-no-unknown': null,
		'property-no-vendor-prefix': true,
		'property-allowed-list': null,
		'keyframe-declaration-no-important': true,
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
		'declaration-block-no-duplicate-properties': [
			true,
			{ ignore: ['consecutive-duplicates'] }
		],
		'declaration-block-no-redundant-longhand-properties': [
			true,
			{ severity: 'warning' }
		],
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-single-line-max-declarations': null,
		'declaration-block-no-duplicate-custom-properties': true,
		'block-no-empty': [true, { severity: 'warning' }],
		'selector-attribute-operator-disallowed-list': null,
		'selector-attribute-operator-allowed-list': null,
		'selector-attribute-quotes': 'always',
		'selector-class-pattern': null,
		'selector-id-pattern': null,
		'selector-max-compound-selectors': 4,
		'selector-max-specificity': ['0,3,0', { severity: 'warning' }],
		'selector-nested-pattern': null,
		'selector-no-qualifying-type': true,
		'selector-no-vendor-prefix': true,
		'selector-pseudo-class-disallowed-list': null,
		'selector-pseudo-class-no-unknown': [true, { severity: 'warning' }],
		'selector-pseudo-class-allowed-list': null,
		'selector-pseudo-element-colon-notation': null,
		'selector-pseudo-element-no-unknown': [true, { severity: 'warning' }],
		'selector-type-case': 'lower',
		'selector-type-no-unknown': [true, { severity: 'warning' }],
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
		'rule-empty-line-before': ['always', { severity: 'warning' }],
		'media-feature-name-disallowed-list': null,
		'media-feature-name-no-unknown': [true, { severity: 'warning' }],
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-name-allowed-list': null,
		'media-feature-name-value-allowed-list': null,
		'custom-media-pattern': null,
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
		'at-rule-no-unknown': [true, { severity: 'warning' }],
		'at-rule-no-vendor-prefix': true,
		'at-rule-allowed-list': null,
		'at-rule-property-required-list': null,
		'comment-empty-line-before': null,
		'comment-no-empty': null,
		'comment-whitespace-inside': 'always',
		'comment-word-disallowed-list': null,
		'comment-pattern': null,
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
		'no-invalid-double-slash-comments': null,
		'no-unknown-animations': null,
		'no-duplicate-at-import-rules': true,
		'no-invalid-position-at-import-rule': true,
		'no-irregular-whitespace': true,
		'alpha-value-notation': ['number'],
		'color-function-notation': ['legacy'],
		'hue-degree-notation': null,
		'named-grid-areas-no-invalid': true,
		'rule-selector-property-disallowed-list': null,
		'annotation-no-unknown': true,
		'import-notation': null,
		'keyframe-selector-notation': ['percentage', { severity: 'warning' }],
		'selector-not-notation': ['complex', { severity: 'warning' }],
		'keyframe-block-no-duplicate-selectors': true,
		'media-feature-range-notation': null,
		'declaration-property-value-no-unknown': [
			true,
			{ severity: 'warning' }
		],
		'media-feature-name-unit-allowed-list': null,
		'media-feature-name-value-no-unknown': true,
		'media-query-no-invalid': true,
		'no-unknown-custom-properties': null,
		'selector-anb-no-unmatchable': null
	}
};

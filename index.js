module.exports = {

	plugins: [
		'stylelint-selector-pseudo-class-lvhfa',
		'stylelint-value-list-box-shadow-inset-first',
		'stylelint-number-z-index-constraint'
	],

	rules: {

		// Other
		'plugin/selector-pseudo-class-lvhfa': [true, { severity: 'warning' }],
		'plugin/value-list-box-shadow-inset-first': [true, { severity: 'warning' }],
		'plugin/number-z-index-constraint': {
			min: 10,
			max: 9999
		},

		// Color
		'color-hex-case': 'lower',
		'color-hex-length': 'short',
		'color-named': ['never', { severity: 'warning' }],
		'color-no-hex': null,
		'color-no-invalid-hex': true,

		// Font family
		'font-family-name-quotes': ['always-where-recommended', { severity: 'warning' }],

		// Font weight
		'font-weight-notation': 'named-where-possible',

		// Function
		'function-blacklist': null,
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
		'function-url-data-uris': ['never', { severity: 'warning' }],
		'function-url-quotes': ['always', { severity: 'warning' }],
		'function-whitelist': null,
		'function-whitespace-after': 'always',

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
		'time-no-imperceptible': [true, { severity: 'warning' }],

		// Unit
		'unit-blacklist': null,
		'unit-case': 'lower',
		'unit-no-unknown': [true, { severity: 'warning' }],
		'unit-whitelist': null,

		// Value
		'value-no-vendor-prefix': [true, { severity: 'warning' }],

		// Value list
		'value-keyword-case': 'lower',
		'value-list-comma-newline-after': null,
		'value-list-comma-newline-before': null,
		'value-list-comma-space-after': 'always',
		'value-list-comma-space-before': 'never',

		// Custom property
		'custom-property-no-outside-root': [true, { severity: 'warning' }],
		'custom-property-pattern': null,

		// Shorthand property
		'shorthand-property-no-redundant-values': [true, { severity: 'warning' }],

		// Property
		'property-blacklist': null,
		'property-case': 'lower',
		'property-no-vendor-prefix': [true, { severity: 'warning' }],
		'property-unit-blacklist': null,
		'property-unit-whitelist': null,
		'property-whitelist': null,
		'property-value-blacklist': null,
		'property-value-whitelist': null,

		// Keyframe declaration
		'keyframe-declaration-no-important': true,

		// Declaration
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-colon-newline-after': ['always-multi-line', { severity: 'warning' }],
		'declaration-colon-space-after': 'never',
		'declaration-colon-space-before': 'never',
		'declaration-no-important': null,
		'declaration-property-unit-blacklist': null,
		'declaration-property-unit-whitelist': null,
		'declaration-property-value-blacklist': [{
			'/^border/': ['none']
		}, { severity: 'warning' }],
		'declaration-property-value-whitelist': null,

		// Declaration block
		'declaration-block-no-duplicate-properties': [true, { ignore: ['consecutive-duplicates'] }],
		'declaration-block-no-ignored-properties': [true, { severity: 'warning' }],
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-properties-order': null,
		'declaration-block-semicolon-newline-after': null,
		'declaration-block-semicolon-newline-before': null,
		'declaration-block-semicolon-space-after': 'always-single-line',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-block-single-line-max-declarations': null,
		'declaration-block-trailing-semicolon': 'always',

		// Block
		'block-closing-brace-newline-after': 'always',
		'block-closing-brace-newline-before': 'always-multi-line',
		'block-closing-brace-space-after': null,
		'block-closing-brace-space-before': 'always-single-line',
		'block-no-empty': [true, { severity: 'warning' }],
		'block-no-single-line': [true, { severity: 'warning' }],
		'block-opening-brace-newline-after': 'always-multi-line',
		'block-opening-brace-newline-before': null,
		'block-opening-brace-space-after': 'always-single-line',
		'block-opening-brace-space-before': 'always',

		// Selector
		'selector-attribute-brackets-space-inside': 'never',
		'selector-attribute-operator-blacklist': null,
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		'selector-attribute-operator-whitelist': null,
		'selector-class-pattern': null,
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-id-pattern': null,
		'selector-max-compound-selectors': 4,
		'selector-max-specificity': ['0,3,0', { severity: 'warning' }],
		'selector-no-attribute': null,
		'selector-no-combinator': null,
		'selector-no-id': null,
		'selector-no-qualifying-type': true,
		'selector-no-type': [true, { severity: 'warning' }],
		'selector-no-universal': [true, { severity: 'warning' }],
		'selector-no-vendor-prefix': [true, { severity: 'warning' }],
		'selector-pseudo-class-case': 'lower',
		'selector-pseudo-class-no-unknown': [true, { severity: 'warning' }],
		'selector-pseudo-class-parentheses-space-inside': 'never',
		'selector-pseudo-element-case': 'lower',
		'selector-pseudo-element-colon-notation': null,
		'selector-pseudo-element-no-unknown': [true, { severity: 'warning' }],
		'selector-root-no-composition': true,
		'selector-type-case': 'lower',
		'selector-type-no-unknown': [true, { severity: 'warning' }],
		'selector-max-empty-lines': 0,

		// Selector list
		'selector-list-comma-newline-after': 'always-multi-line',
		'selector-list-comma-newline-before': null,
		'selector-list-comma-space-after': 'always-single-line',
		'selector-list-comma-space-before': 'never',

		// Root rule
		'root-no-standard-properties': null,

		// Rule
		'rule-nested-empty-line-before': ['always-multi-line', { severity: 'warning' }],
		'rule-non-nested-empty-line-before': ['always', { severity: 'warning' }],

		// Media feature
		'media-feature-colon-space-after': 'never',
		'media-feature-colon-space-before': 'never',
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-no-missing-punctuation': true,
		'media-feature-range-operator-space-after': 'always',
		'media-feature-range-operator-space-before': 'always',

		// Custom media
		'custom-media-pattern': null,

		// Media query
		'media-query-parentheses-space-inside': 'never',

		// Media query list
		'media-query-list-comma-newline-after': 'always-multi-line',
		'media-query-list-comma-newline-before': null,
		'media-query-list-comma-space-after': 'always-single-line',
		'media-query-list-comma-space-before': 'never',

		// At-rule
		'at-rule-blacklist': null,
		'at-rule-empty-line-before': ['always', {
			except: ['blockless-group', 'all-nested']
		}],
		'at-rule-name-case': 'lower',
		'at-rule-name-newline-after': ['always-multi-line', { severity: 'warning' }],
		'at-rule-name-space-after': 'always-single-line',
		'at-rule-no-unknown': [true, { severity: 'warning' }],
		'at-rule-no-vendor-prefix': [true, { severity: 'warning' }],
		'at-rule-semicolon-newline-after': 'always',
		'at-rule-whitelist': null,

		// stylelint-disable comment
		'stylelint-disable-reason': 'always-after',

		// Comment
		'comment-empty-line-before': null,
		'comment-whitespace-inside': 'always',
		'comment-word-blacklist': null,

		// General / Sheet
		'indentation': ['tab', { indentInsideParens: ['once'] }],
		'max-empty-lines': [1, { severity: 'warning' }],
		'max-line-length': null,
		'max-nesting-depth': [4, {
			ignore: 'at-rules-without-declaration-blocks',
			severity: 'warning'
		}],
		'no-browser-hacks': [true, { severity: 'warning' }],
		'no-descending-specificity': [true, { severity: 'warning' }],
		'no-duplicate-selectors': [true, { severity: 'warning' }],
		'no-empty-source': [true, { severity: 'warning' }],
		'no-eol-whitespace': true,
		'no-extra-semicolons': true,
		'no-indistinguishable-colors': [true, { severity: 'warning' }],
		'no-invalid-double-slash-comments': null,
		'no-missing-eof-newline': true,
		'no-unknown-animations': null,
		'no-unsupported-browser-features': null
	}
};

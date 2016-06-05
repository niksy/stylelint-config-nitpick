module.exports = {
	'extends': [
		'./'
	].map(require.resolve),

	plugins: [
		'stylelint-scss'
	],

	rules: {
		'scss/at-extend-no-missing-placeholder': true,
		'scss/at-function-pattern': [/^[\da-z-_]+$/, { severity: 'warning' }],
		'scss/at-mixin-pattern': [/^[\da-z-_]+$/, { severity: 'warning' }],
		'scss/dollar-variable-pattern': [/^[\da-z-_]+$/, { severity: 'warning' }],
		'scss/percent-placeholder-pattern': [/^[\da-z-_]+$/, { severity: 'warning' }],
		'scss/at-import-no-partial-extension': true,
		'scss/at-import-no-partial-leading-underscore': true,
		'scss/at-mixin-no-argumentless-call-parentheses': true,
		'scss/dollar-variable-no-missing-interpolation': true,
		'scss/selector-no-redundant-nesting-selector': [true, { severity: 'warning' }]
	}
};

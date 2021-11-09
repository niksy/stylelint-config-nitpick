# stylelint-config-niksy

[![Build Status][ci-img]][ci]

[Stylelint][stylelint] config for my projects.

## Install

```sh
npm install stylelint@13 stylelint-config-niksy --save-dev
```

## Usage

Add this config to your `.stylelintrc`:

<!-- prettier-ignore-start -->

```json
{
	"extends": [
		"stylelint-config-niksy"
	]
}
```

<!-- prettier-ignore-end -->

If you’re using [presets](#presets), **it’s highly recommended to apply default
preset:**

<!-- prettier-ignore-start -->

```json
{
	"extends": [
		"stylelint-config-niksy",
		"stylelint-config-niksy/other-preset"
	]
}
```

<!-- prettier-ignore-end -->

## Presets

In addition to default preset, there are also specific presets. You can apply
multiple presets with [Stylelint `extends` option][eslint-extends].

### SCSS

SCSS specific rules.

<!-- prettier-ignore-start -->

```json
{
	"extends": [
		"stylelint-config-niksy/scss"
	]
}
```

<!-- prettier-ignore-end -->

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

<!-- prettier-ignore-start -->

[ci]: https://github.com/niksy/stylelint-config-niksy/actions?query=workflow%3ACI
[ci-img]: https://github.com/niksy/stylelint-config-niksy/workflows/CI/badge.svg?branch=master
[stylelint]: http://stylelint.io/
[stylelint-extends]: https://stylelint.io/user-guide/configuration/#extends

<!-- prettier-ignore-end -->

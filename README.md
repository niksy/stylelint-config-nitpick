# stylelint-config-nitpick

[![Build Status][ci-img]][ci]

[Stylelint][stylelint] config for my projects.

## Install

```sh
npm install stylelint stylelint-config-nitpick --save-dev
```

## Usage

Add this config to your `.stylelintrc`:

<!-- prettier-ignore-start -->

```json
{
	"extends": [
		"stylelint-config-nitpick"
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
		"stylelint-config-nitpick",
		"stylelint-config-nitpick/other-preset"
	]
}
```

<!-- prettier-ignore-end -->

## Presets

In addition to default preset, there are also specific presets. You can apply
multiple presets with [Stylelint `extends` option][stylelint-extends].

### SCSS

SCSS specific rules.

<!-- prettier-ignore-start -->

```json
{
	"extends": [
		"stylelint-config-nitpick/scss"
	]
}
```

<!-- prettier-ignore-end -->

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

<!-- prettier-ignore-start -->

[ci]: https://github.com/niksy/stylelint-config-nitpick/actions?query=workflow%3ACI
[ci-img]: https://github.com/niksy/stylelint-config-nitpick/workflows/CI/badge.svg?branch=master
[stylelint]: http://stylelint.io/
[stylelint-extends]: https://stylelint.io/user-guide/configuration/#extends

<!-- prettier-ignore-end -->

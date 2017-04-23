# stylelint-config-niksy

[![Build Status][ci-img]][ci]

[Stylelint][stylelint] config for my projects.

## Install

```sh
npm install stylelint stylelint-config-niksy --save-dev
```

## Usage

Add this config to your `.stylelintrc`:

```json
{
	"extends": [
		"stylelint-config-niksy"
	]
}
```

## Presets

In addition to default preset, there are also specific presets. All presets extend default one.

### SCSS

```json
{
	"extends": [
		"stylelint-config-niksy/scss"
	]
}
```

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/stylelint-config-niksy
[ci-img]: https://travis-ci.org/niksy/stylelint-config-niksy.svg?branch=master
[stylelint]: http://stylelint.io/

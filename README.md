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

```sh
npm install stylelint-scss --save-dev
```

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
[ci-img]: https://img.shields.io/travis/niksy/stylelint-config-niksy/master.svg
[stylelint]: http://stylelint.io/

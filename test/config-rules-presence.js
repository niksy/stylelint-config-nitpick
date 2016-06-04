var assert = require('assert');
var difference = require('lodash.difference');
var defaultConfig = Object.keys(require('stylelint').rules);
var customConfig = Object.keys(require('../').rules);

describe('Config rules presence', function () {

	it('all default config rules present in custom config', function () {
		var list = difference(defaultConfig, customConfig);
		assert.equal(list.length, 0, 'Following rules are not present in custom config: \n' + list.join(', \n'));
	});

	it('all custom config rules present in default config', function () {
		var list = difference(customConfig, defaultConfig);
		assert.equal(list.length, 0, 'Following rules are not present in default config: \n' + list.join(', \n'));
	});

});

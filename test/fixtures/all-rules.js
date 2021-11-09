'use strict';

const path = require('path');

module.exports = {
	'extends': ['./', './scss'].map((m) => {
		return require.resolve(path.resolve(process.cwd(), m));
	})
};

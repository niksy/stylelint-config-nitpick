import { defineConfig } from 'eslint/config';
import configBase from 'eslint-config-nitpick';
import configTests from 'eslint-config-nitpick/tests';
import configPrettier from 'eslint-config-prettier/flat';
import pluginPrettier from 'eslint-plugin-prettier';

export default defineConfig([
	configBase,
	configPrettier,
	{
		plugins: {
			prettier: pluginPrettier
		},
		rules: {
			'prettier/prettier': 1
		}
	},
	{
		files: ['test/**/*'],
		extends: [configTests]
	}
]);

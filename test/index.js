import { promises as fs } from 'node:fs';
import assert from 'node:assert';
import { fileURLToPath } from 'node:url';
import isPlainObject from 'lodash/isPlainObject.js';
import stylelint from 'stylelint';

/**
 * @param {string} file
 * @param {object} config
 *
 * @returns {Promise}
 */
async function runStylelint(file, config) {
	const code = await fs.readFile(new URL(file, import.meta.url), 'utf8');
	try {
		return await stylelint.lint({
			code,
			config
		});
	} catch (error) {
		throw error;
	}
}

/**
 * @param {stylelint.Config} config
 *
 * @returns {Promise<Array>}
 */
async function validateConfiguration(config) {
	try {
		const data = await stylelint.lint({
			code: '',
			config: config
		});
		return [].concat(
			data.results[0].deprecations,
			data.results[0].invalidOptionWarnings
		);
	} catch (error) {
		return [];
	}
}

/**
 * @param {object[]} errors
 *
 * @returns {Array<string>}
 */
function mapErrors(errors) {
	return errors.map((warning) => warning.rule);
}

describe('Default config', function () {
	it('should have config objects as plain objects', async function () {
		const { default: config } = await import('../index.js');

		assert.ok(isPlainObject(config));
		assert.ok(isPlainObject(config.rules));
	});

	it('should not have invalid options or deprecation warnings', async function () {
		const { default: config } = await import('../index.js');
		const errors = await validateConfiguration(config);
		assert.equal(errors.length, 0);
	});

	it('should return proper validation errors for linted code', async function () {
		try {
			const { results } = await runStylelint(
				'./fixtures/default.config.css',
				{
					extends: fileURLToPath(
						new URL('../index.js', import.meta.url)
					)
				}
			);
			const errors = mapErrors(results[0].warnings);
			assert.notEqual(
				errors.indexOf('declaration-property-value-disallowed-list'),
				-1
			);
			assert.notEqual(
				errors.indexOf('plugin/selector-pseudo-class-lvhfa'),
				-1
			);
			assert.notEqual(
				errors.indexOf('plugin/value-list-box-shadow-inset-first'),
				-1
			);
			assert.notEqual(
				errors.indexOf('plugin/number-z-index-constraint'),
				-1
			);
			assert.notEqual(errors.indexOf('order/properties-order'), -1);
		} catch (error) {
			assert.ifError(error);
		}
	});
});

describe('SCSS config', function () {
	it('should have config objects as plain objects', async function () {
		const { default: config } = await import('../scss.js');

		assert.ok(isPlainObject(config));
		assert.ok(isPlainObject(config.rules));
	});

	it('should not have invalid options or deprecation warnings', async function () {
		const { default: config } = await import('../scss.js');
		const errors = await validateConfiguration(config);
		assert.equal(errors.length, 0);
	});

	it('should return proper validation errors for linted code', async function () {
		try {
			const { results } = await runStylelint(
				'./fixtures/scss.config.scss',
				{
					extends: fileURLToPath(
						new URL('../scss.js', import.meta.url)
					)
				}
			);
			const errors = mapErrors(results[0].warnings);
			assert.notEqual(errors.indexOf('scss/at-function-pattern'), -1);
			assert.notEqual(
				errors.indexOf('scss/at-import-partial-extension-blacklist'),
				-1
			);
			assert.notEqual(errors.indexOf('at-rule-disallowed-list'), -1);
			assert.equal(errors.indexOf('at-rule-no-unknown'), -1);
			assert.equal(
				errors.indexOf('block-closing-brace-newline-after'),
				-1
			);
		} catch (error) {
			assert.ifError(error);
		}
	});
});

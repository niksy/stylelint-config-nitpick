import { fileURLToPath } from 'node:url';

export default {
	extends: ['./index.js', './scss.js'].map((file) => {
		return fileURLToPath(new URL(`../../${file}`, import.meta.url));
	})
};

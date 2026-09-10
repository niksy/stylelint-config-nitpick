/** @import * as lintStaged from 'lint-staged'; */
/** @type {lintStaged.Configuration} */
export default {
	'*.js': ['eslint --fix'],
	'*.(md|json|yml)': ['prettier --ignore-path .gitignore --write'],
	'.!(npm)*rc': ['prettier --ignore-path .gitignore --parser json --write']
};

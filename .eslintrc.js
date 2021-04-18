module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: ['plugin:vue/recommended', '@vue/prettier', 'plugin:prettier/recommended'],
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['vue'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'prettier/prettier': ['error'],
		'vue/no-multiple-template-root': 'off'
	}
};

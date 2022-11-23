module.exports = {
	extends: ['next/core-web-vitals', 'airbnb', 'airbnb/hooks', 'prettier'],
	plugins: ['react', '@typescript-eslint', 'prettier'],
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: 'module',
	},
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'react/jsx-props-no-spreading': 'off',
		'import/prefer-default-export': 'off',
		'no-param-reassign': 'off',
		'global-require': 0,
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
			},
		],
		'consistent-return': 'off',
		'import/no-cycle': 'off',
		'arrow-body-style': 'off',
		'prefer-arrow-callback': 'off',
		'react/jsx-filename-extension': 'off',
		'react/require-default-props': 'off',
		'react/button-has-type': 'off',
		'react/destructuring-assignment': 'off',
		'no-unused-expressions': 'off',
		'no-unused-vars': 'off',
		'no-nested-ternary': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
		'react/no-array-index-key': 'off',
		'no-return-assign': 'off',
		'no-empty': 'off',
		camelcase: 'off',
		'import/no-extraneous-dependencies': 'off',
		'@next/next/no-img-element': 'off',
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'auto',
			},
		],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx'],
				moduleDirectory: ['src', 'node_modules'],
			},
		},
	},
};

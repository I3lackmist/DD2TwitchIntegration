/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"plugin:prettier/recommended",
		"@vue/eslint-config-typescript/recommended",
		"@vue/eslint-config-prettier",
	],
	env: {
		"vue/setup-compiler-macros": true,
	},
	overrides: [
		{
			files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
			extends: ["plugin:cypress/recommended"],
		},
	],
	rules: {
		"prettier/prettier": ["warn", { useTabs: true }],
		"vue/script-indent": ["error", "tab", {}],
		"vue/html-indent": ["error", "tab", {}],
	},
};

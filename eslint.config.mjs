import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs}'],
		languageOptions: {
			globals: globals.browser,
		},
		plugins: {
			js,
		},
		extends: ['plugin:js/recommended'],
	},
	{
		files: ['**/*.js'],
		languageOptions: {
			sourceType: 'script',
		},
	},
])

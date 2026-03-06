import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import globals from 'globals'

export default tseslint.config(
    { ignores: ['dist', 'node_modules', 'auto-imports.d.ts', 'components.d.ts'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            ...pluginVue.configs['flat/recommended']
        ],
        files: ['**/*.{ts,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
            parserOptions: {
                parser: tseslint.parser
            }
        },
        rules: {
            // Vue template 使用 4 空格缩进（与项目风格保持一致）
            'vue/html-indent': ['warn', 4],
            'vue/script-indent': ['warn', 4, { baseIndent: 0 }],

            // 允许多种组件命名
            'vue/multi-word-component-names': 'off',

            // 关闭一些过于严格的规则
            'vue/max-attributes-per-line': 'off',
            'vue/singleline-html-element-content-newline': 'off',
            'vue/html-self-closing': [
                'warn',
                {
                    html: { void: 'any', normal: 'always', component: 'always' },
                    svg: 'always',
                    math: 'always'
                }
            ],
            'vue/attributes-order': 'off',

            // TypeScript 相关
            '@typescript-eslint/no-explicit-any': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
        }
    }
)

// import { globalIgnores } from 'eslint/config'
// import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
// import pluginVue from 'eslint-plugin-vue'
// import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// // To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// // import { configureVueProject } from '@vue/eslint-config-typescript'
// // configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// // More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

// export default defineConfigWithVueTs(
//   {
//     name: 'app/files-to-lint',
//     files: ['**/*.{ts,mts,tsx,vue}'],
//   },

//   globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

//   pluginVue.configs['flat/essential'],
//   vueTsConfigs.recommended,
//   skipFormatting,
// )

// import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
// import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
// import pluginVue from 'eslint-plugin-vue'
// import { globalIgnores } from 'eslint/config'

// // To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// // import { configureVueProject } from '@vue/eslint-config-typescript'
// // configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// // More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

// export default defineConfigWithVueTs(
//   {
//     name: 'app/files-to-lint',
//     files: ['**/*.{ts,mts,tsx,vue}'],
//   },

//   globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

//   pluginVue.configs['flat/essential'],
//   vueTsConfigs.recommended,
//   skipFormatting,

//     //  主配置对象，指定要校验的文件类型及自定义规则
//   {
//     name: 'app/files-to-lint',
//     files: ['**/*.{ts,mts,tsx,vue}'],
//     rules: {
//       // 1.Prettier 相关规则：
//       // 使用单引号
//       // 不加分号
//       // 每行最大 80 字符
//       // 对象/数组最后不加逗号
//       // 行尾符号自动（兼容不同操作系统）
//       'prettier/prettier': [
//         'warn',
//         {
//           singleQuote: true,
//           semi: false,
//           printWidth: 80,
//           trailingComma: 'none',
//           endOfLine: 'auto'
//         }
//       ],
//       // 2. Vue 相关规则：
//       // - 允许组件名为 index.vue（否则要求多单词）
//       'vue/multi-word-component-names': [
//         'warn',
//         {
//           ignores: ['index']
//         }
//       ],
//       // 3. 关闭 props 解构限制（setup 语法糖下可安全解构）
//       'vue/no-setup-props-destructure': ['off']
//     }
//   },

//   {
//     name: 'app/files-to-ignore',
//     ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
//     //rules添加到这里，这里应该也是莫一种文件吧加不加无所谓
//     rules: {
//       'prettier/prettier': [
//         'warn',
//         {
//           singleQuote: true,
//           semi: false,
//           printWidth: 80,
//           trailingComma: 'none',
//           endOfLine: 'auto'
//         }
//       ],
//       'vue/multi-word-component-names': [
//         'warn',
//         {
//           ignores: ['index']
//         }
//       ],
//       'vue/no-setup-props-destructure': ['off']
//     }
//   },

// )

import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import {
  defineConfigWithVueTs,
  vueTsConfigs
} from '@vue/eslint-config-typescript'
import prettierPlugin from 'eslint-plugin-prettier'
import pluginVue from 'eslint-plugin-vue'

export default defineConfigWithVueTs({
  name: 'app/files-to-lint',
  files: ['**/*.{ts,mts,tsx,vue}'],
  ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  extends: [pluginVue.configs['flat/essential'], vueTsConfigs.recommended],
  plugins: {
    prettier: prettierPlugin
  },
  rules: {
    ...skipFormatting.rules,
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        printWidth: 80,
        trailingComma: 'none',
        endOfLine: 'auto'
      }
    ],
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index']
      }
    ],
    'vue/no-setup-props-destructure': ['off']
  }
})

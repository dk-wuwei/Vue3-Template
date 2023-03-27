/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __DEV__: 'true', // 是否开发环境
    __TEST__: 'false', // 是否测试环境
  },
  plugins: [vue()],
  test: {
    // globals: true,
    // 模拟dom环境
    environment: 'happy-dom',
    coverage: {
      // 覆盖率提供者
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      // 设置覆盖文件夹
      reportsDirectory: './coverage',
      // 检查每个文件的阈值
      perFile: true,
      // 设置代码覆盖率阈值
      lines: 75,
      functions: 75,
      branches: 75,
      statements: 75,
    },
    open: true,
    include: ['./src/components/**/*.{test,spec}.ts'],
  },
})

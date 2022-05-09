import camelCase from 'lodash.camelcase' // 转换字符串string为驼峰写法
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'

const pkg = require('./package.json') // 引入package.json文件
const libraryName = 'l-sdk' // 项目名称

export default {
  // 入口配置
  input: `src/${libraryName}.ts`,
  // 出口配置
  output: [
    // 输出umd规范的代码,umd兼容CommonJS和AMD规范的同时，还兼容全局引用的方式
    {
      file: pkg.main,
      name: camelCase(libraryName),
      format: 'umd',
      sourcemap: true
    },
    // 输出es module规范的代码,目前部分主流浏览器已原生支持ES Module
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  watch: {
    include: 'src/**'
  },
  // 插件
  plugins: [
    // 允许json解析
    json(),
    // 编译TypeScript文件
    typescript({ useTsconfigDeclarationDir: true }),
    // 允许绑定commonjs模块(与webpack不同，rollup不理解commonjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),

    // 将源映射解析为原始源
    sourceMaps()
  ]
}

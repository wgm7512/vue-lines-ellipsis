
import vue from 'rollup-plugin-vue';
import commonjs from '@rollup/plugin-commonjs';
import clear from 'rollup-plugin-clear';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    file: 'dist/vue-lines-ellipsis.js'
  },
  plugins: [
    clear({
      targets: ['dist'],
      watch: true,
    }),
    vue(),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    // 压缩代码
    uglify(),
    // // 热更新 默认监听根文件夹
    // livereload(),
    // // 本地服务器
    // serve({
    //   open: true, // 自动打开页面
    //   port: 8000,
    //   openPage: '/public/index.html', // 打开的页面
    //   contentBase: ''
    // })
  ]
};
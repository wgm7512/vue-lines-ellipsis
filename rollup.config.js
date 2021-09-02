
import vue from 'rollup-plugin-vue';
import clear from 'rollup-plugin-clear'
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    format: 'es',
    file: 'dist/VueLinesEllipsis.js'
  },
  plugins: [
    vue(),
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
    // }),
    clear({
      targets: ['dist'],
      watch: true,
    })
  ]
};
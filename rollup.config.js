
import vue from 'rollup-plugin-vue';
import clear from 'rollup-plugin-clear'

export default {
  input: 'src/index.js',
  output: {
    format: 'es',
    file: 'dist/VueLinesEllipsis.js'
  },
  plugins: [
    vue(),
    clear({
      targets: ['dist'],
      watch: true,
    })
  ]
};
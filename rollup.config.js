import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js', // 打包入口
  output: [
    {
      file: 'lib/rough-renderer.js', // 对于 Nodejs，打包成 commonjs
      format: 'cjs',
    },
    {
      file: 'esm/rough-renderer.js', // 对于浏览器，打包成 ES module
      format: 'es',
    },
    {
      file: 'dist/rough-renderer.min.js',
      name: 'r2',
      format: 'umd', // 对于 Nodejs 和浏览器，打包成混合模式
    },
  ],
  plugins: [
    babel(), // 使用 babel 插件
    resolve(),
    uglify(),
  ],
};

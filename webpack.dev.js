import webpackCommon from './webpack.common.js';
import { merge } from 'webpack-merge';

export default merge(webpackCommon, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    // By default only watches files added to js bundle
    watchFiles: ['./src/*.html'],
  },
});

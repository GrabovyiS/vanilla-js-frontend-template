import webpackCommon from './webpack.common.js';
import { merge } from 'webpack-merge';

export default merge(webpackCommon, {
  mode: 'development',
  devtool: 'inline-source-map',
});

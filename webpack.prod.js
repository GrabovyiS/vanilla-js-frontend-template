import webpackCommon from './webpack.common.js';
import { merge } from 'webpack-merge';

export default merge(webpackCommon, {
  mode: 'production',
  devtool: 'source-map',
});

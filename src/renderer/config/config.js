

const path = require('path');
const theme = require('../theme.config.js');
const pageRoutes = require('./routes');
const { NODE_ENV } = process.env;


export default {
  hash:true,
  history: 'hash',
  outputPath: `../../dist/renderer`,
  publicPath: '/',
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: true,
        dll: true,
        hardSource: false,
        routes: {
          exclude: [/node_modules/],
        },
      },
    ],
  ],
  proxy:{
    '/api/v1': {
      //明哥那边的地址
      target: 'http://0.0.0.0:8082',
      changeOrigin: true,
      pathRewrite: { '/api/v1': '/api/v1' },
    },
  },  
  routes:pageRoutes.routes,
  // lessLoader: { javascriptEnabled: true },
  ignoreMomentLocale: true,
  alias: {
    components: path.resolve(__dirname, 'src/components'),
    utils: path.resolve(__dirname, 'src/utils/'),
    types: path.resolve(__dirname, 'src/types/'),
  },
  targets: {
    //兼容IE11
    ie: 11,
  },
  theme: {
    ...theme(),
  },
};

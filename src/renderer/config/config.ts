const { NODE_ENV } = process.env

console.log('NODE_ENV',NODE_ENV);

export default {
  history: 'hash',
  outputPath: `../../dist/renderer`,
  publicPath: './',
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
  proxy:{},
  routes: [
    {
      path: '/',
      component: './home/views/index',
    },
  ],
};

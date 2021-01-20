
  module.exports = {
    routes: [
      {
        path: '/',
        component: './login/views/index',
      },
      {
        path: '/cloud',
        component: './app',
        
        routes: [
          {
            path: '/user',
            component: './home/views/index',
          },
         
        ],
      },
    ],
  }
/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification,message } from 'antd';
import router from 'umi/router';
// const baseUrl = process.env.baseUrl;


const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = error => {
  const { response = {} } = error;
  let errortext = codeMessage[response.status] || response.statusText;
  const { status } = response;
  // console.log(`response${JSON.stringify(response)}`)
  if (status === 400 && !window.sessionStorage.getItem('token')) {
    errortext = '账户名或密码错误'
  }
  if (status === 401) {
    notification.error({
      message: `登录已过期，请重新登录`,
      duration: 2,
    });
    window.sessionStorage.clear()
    router.replace({
      pathname: '/login'
    });
    return
  }
  notification.error({
    message: `请求错误 ${status}`,
    description: errortext,
  });
  return error
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    // Authorization: authorization(noAuth),
  }
});



// request拦截器, 改变url 或 options.
request.interceptors.request.use((url, options) => {
  let newOption = {...options}
  if(newOption.method === 'POST' || newOption.method === 'DELETE' || newOption.method === 'PUT') {
   // params --> 会被放到body的请求参数，POST／PUT／DELETE 方法
    newOption.data = newOption.body
  }else {
   // params --> 会被拼接到url上的的请求参数，GET方法
    newOption.params = newOption.body  
  }
  if(newOption.body) {
   //  为了保证调用的一致性，外部都通过自定义的body传递参数，但body是关键字需要手动清除
    newOption = _omit(newOption, 'body') 
  }
  return (
    {
      url: options.mock ? url : `${url}`,
      options: {
        ...newOption
      },
    }
  );
});

// response拦截器, 处理response
request.interceptors.response.use(async response => {
  const data = await response.clone().json()
  if(data.status !== 200 && data.message){
    message.error(data.message)
  }
  return  response;
});

export default request;



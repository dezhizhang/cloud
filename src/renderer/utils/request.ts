import fetch from 'dva/fetch';
import { notification,message } from 'antd';
import store from '../index';

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
};

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const errortext = codeMessage[response.status] || response.statusText;
  notification.error({
    // message: `请求错误 ${response.status}: ${response.url}`,
    // message: `请求错误 ${response.status}`,
    message: errortext,
    duration: 3
  });
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

export default function request(url, options) {
  const defaultOptions = {
    // credentials: 'include',
    // withCredentials: true,
    // mode: "cors"
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST') {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        token: window.localStorage.getItem('zkToken') ? window.localStorage.getItem('zkToken') : '',
        ...newOptions.headers,
      };
    } else {
      newOptions.headers = {
        Accept: 'application/json',
        token: window.localStorage.getItem('zkToken') ? window.localStorage.getItem('zkToken') : '',
        ...newOptions.headers,
      };
    }
  } else{
    newOptions.headers = {
      Accept: 'application/json',
      token: window.localStorage.getItem('zkToken') ? window.localStorage.getItem('zkToken') : '',
      ...newOptions.headers,
    };
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      const { dispatch } = store;
      const status = data.code;
      // console.log(data)
      if (status >= 200 && status < 300) {
        return data;
      }
      if (status === 401 ) {
        dispatch({
          type: 'login/logout',
        });
        return data;
      }
      const errortext = data.msg || codeMessage[status];
      if(url==='/systemUser/login'){
        return data;
      }else{
        // notification.error({
        // message: errortext,
        // duration: 3
        // });
        message.error(errortext)
      }
      return data;
    })
    .catch(e => {
      const { dispatch } = store;
      const status = e.name;
      if (status === 401 || status === 403) {
        dispatch({
          type: 'login/logout',
        });
        return { code: status };
      }
      return { code: status };
    });

}

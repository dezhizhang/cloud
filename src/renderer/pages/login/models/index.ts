import { routerRedux } from 'dva/router';
import { fakeAccountLogin } from '../service/index';

export default {
  namespace: 'login',

  state: {
    status: undefined,
    msg:''
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);

      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      if (response.code === 200) {
        window.localStorage.setItem('zkToken',response.data)
        window.localStorage.setItem('userId',payload.loginName);
        yield put(routerRedux.replace('/index'));

      }
    },
    *logout(_, { put }) {
      window.localStorage.clear();
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest',
        },
      });

      yield put(
        routerRedux.push({
          pathname: '/',
          // search: stringify({
          //   redirect: window.location.href,
          // }),
        })
      );
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      return {
        ...state,
        status: payload.status,
        name: payload.name,
        msg:payload.msg==="SUCCESS"? "":payload.msg
      };
    },
  },
};

import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  return request('/api/v1/login', {
    method: 'POST',
    data:params,
  });
}
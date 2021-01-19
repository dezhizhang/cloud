import HttpRequest from '@/utils/request';

export async function fakeAccountLogin(params) {
  return HttpRequest('/api/v1/login', {
    method: 'POST',
    body:params,
  });
}
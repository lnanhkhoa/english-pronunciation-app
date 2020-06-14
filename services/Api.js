// a library to wrap and simplify api calls
import apisauce from 'apisauce';

const apiAuth = apisauce.create({
  baseURL: 'https://auth.leecafeteria.net/',
  headers: {
    'Cache-Control': 'no-cache',
  },
  timeout: 10000,
});
const bearerAuth = Authorization => `Bearer ${Authorization}`;

const create = (baseURL) => ({
  postlogin: data => apiAuth.post('api/User/SignIn', { ...data }),
});


// let's return back our create method as the default.
export default {
  create,
};

import axiosInstance from 'axios';
import { toast } from 'react-toastify';

import configs from '@/config/index.ts';
import type { InternalAxiosRequestConfigWithExtraProps } from '@/types/axios.type.ts';
import { isServer } from '@/utils/index.ts';

const axios = axiosInstance.create({ baseURL: configs.VITE_API_URL });

axios.interceptors.request.use(
  async (conf: InternalAxiosRequestConfigWithExtraProps) => {
    const myConfig = { ...conf };

    const lang = myConfig.headers['Accept-Language'];
    const token = myConfig.noAuth ? null : '';

    if (token) myConfig.headers.Authorization = `Bearer ${token}`;
    if (!isServer && !lang) myConfig.headers['Accept-Language'] = 'en';

    // const endpoint = '/user/:id';
    // urlParams: { id: 1 },
    myConfig.url = Object.entries(conf.urlParams ?? {}).reduce((acc, [k, v]) => {
      let temp = acc.slice();
      temp = temp.replace(`:${k}`, v.toString());

      return temp;
    }, myConfig.url ?? '');

    if (myConfig.data instanceof FormData) {
      myConfig.headers['Content-Type'] = 'multipart/form-data';
    }

    return myConfig;
  },
  async error => {
    if (!isServer) {
      console.debug('Request Error', error);
      toast.error('Request failed! Please check your connection.');
    }
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    console.debug('Response Interceptor:', response);
    const config = response.config as InternalAxiosRequestConfigWithExtraProps;
    const showToastConfig = config.showToast;
    if (showToastConfig && typeof showToastConfig === 'object') {
      // Check if success toast should be shown
      if (showToastConfig.success) {
        toast.success(response.data.message || 'Request successful!');
      }
    } else if (showToastConfig === true) {
      // Show success toast if `showToast` is boolean true
      toast.success(response.data.message || 'Request successful!');
    }
    return response;
  },
  async error => {
    console.debug('Response Error', error);
    if (error.response && [401, 403].includes(error.response.status)) {
      // logout logic
    }

    if (!isServer && error.response) {
      const config = error.config as InternalAxiosRequestConfigWithExtraProps;
      const showToastConfig = config.showToast;

      // Display toast only if `showToast` flag is set in the request config
      if (showToastConfig && typeof showToastConfig === 'object') {
        if (showToastConfig.error) {
          switch (error.response.status) {
            case 400:
              toast.error(error.response.data.message || 'Bad Request!');
              break;
            case 500:
              toast.error('Server error! Please try again later.');
              break;
            default:
              toast.error(error.response.data.message || 'An error occurred!');
              break;
          }
        }
      } else if (showToastConfig === true || showToastConfig === undefined) {
        // Show error toast if `showToast` is boolean true or not defined (default behavior)
        switch (error.response?.status) {
          case 400:
            toast.error(error.response.data.message || 'Bad Request!');
            break;
          case 500:
            toast.error('Server error! Please try again later.');
            break;
          default:
            toast.error(error.response?.data.message || 'An error occurred!');
            break;
        }
      }
    } else {
      toast.error('Something went wrong!');
    }
    return Promise.reject(error);
  }
);

export default axios;

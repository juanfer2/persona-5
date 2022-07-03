import axios from 'axios';

export const AxiosInterceptor = () => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 404) {
        // window.location.href = `/404`;
      }

      if (error.response.status === 401 || error.response.status === 403) {
        // window.location.href = `/404`;
      }

      if (error.response.status === 500 || error.response.status === 501) {
        // window.location.href = `/501`;
      }

      if (error.response.status === 504) {
        console.error('TIME OUT VALIDATION');
      }

      return Promise.reject(error);
    }
  );
};

/*
1. Install thelogrocketmodule via NPM:
npm i --save logrocket
2. Import LogRocket and callLogRocket.initlike so:
import LogRocket from 'logrocket';
LogRocket.init('fsoqbs/frontapp');
*/

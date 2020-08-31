import { configureStore } from "@reduxjs/toolkit";
import { batchDispatchMiddleware } from 'redux-batched-actions';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import axios from 'axios';
import _ from 'lodash';
import getCookie from '@/utils/getCookie';
import { errorTypes } from "@/constants";

const REQUEST_TIMEOUT = 30000;

export default function storeFactory(initialState = {}, server = false, req = null) {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        timeout: REQUEST_TIMEOUT,
        validateStatus: function (status) {
            return status >= 200;
        },
    });

    if (server) {
        if (req.cookies.token) {
            axiosInstance.defaults.headers = {
                'Authorization': `Bearer ${req.cookies.token}`
            }
        }
    } else {
        const idToken = getCookie('token') || localStorage.getItem('id_token');
        if (idToken) {
            axiosInstance.defaults.headers = {
                'Authorization': `Bearer ${idToken}`
            };
        }
    }

    axiosInstance.interceptors.request.use(config => {
        const token = server
            ? req.cookies.token
            : getCookie('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    });

    axiosInstance.interceptors.response.use(function (response) {
        if (response.status >= 400 && response.status <= 500) {
            const res = {
                status: response.status,
                ok: false,
                error: {
                    type: errorTypes[response.status],
                    url: response.config.url,
                    ...response.data,
                }
            };
            return res;
        }
        return {
            ...response,
            ok: true,
        };
    }, function (error) {
        if (error.message.includes('Network Error')) {
            console.log('Network Error', error)
            return {
                ok: false,
                error: {
                    type: errorTypes.NETWORK_ERROR,
                    url: window.location.href,
                }
            };
        }
        return Promise.reject(error);
    });

    const store = configureStore({
        reducer: rootReducer,
        middleware: [batchDispatchMiddleware, thunk.withExtraArgument(axiosInstance)],
        preloadedState: initialState,
    });

    return store;
}

// ========================================================== //
export const initAxiosConfig = () => {
    const { dispatch } = store;
  
    Axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response && error.response.status === 401) {
          dispatch(signOut());
          localStorage.removeItem("token");
          message.error("На жаль ваша сесія закінчилася. Авторизуйтесь знову.");
        }
        return Promise.reject(error);
      }
    );
  };
  
  export const axios = Axios;
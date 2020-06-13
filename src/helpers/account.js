import { setCookie, getCookie, removeCookie } from './storage';

export const COOKIE_ACCOUNT = 'acc';
export const COOKIE_TOKEN = 'tk';
export const COOKIE_REFRESH_TOKEN = 'rtk';

const expires = new Date();
expires.setFullYear(expires.getFullYear() + 1);

const options = { expires };

export const getTokenExpiration = (token) => {
  if (!token) return 0;
  const [, payload] = token.split('.');
  const data = payload ? JSON.parse(atob(payload)) : {};
  return data.exp || 0;
};

export const setAccount = (account) => setCookie(COOKIE_ACCOUNT, account, options);
export const getAccount = () => getCookie(COOKIE_ACCOUNT);
export const removeAccount = () => removeCookie(COOKIE_ACCOUNT);

export const setToken = (token) => setCookie(COOKIE_TOKEN, token, options);
export const getToken = () => getCookie(COOKIE_TOKEN);

export const setRefreshToken = (refreshToken) => setCookie(COOKIE_REFRESH_TOKEN, refreshToken, options);
export const getRefreshToken = () => getCookie(COOKIE_REFRESH_TOKEN);

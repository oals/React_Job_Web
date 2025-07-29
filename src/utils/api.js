import { apiClient } from './apiClient';

const API_URL = import.meta.env.VITE_API_URL;

export function register(registerData) {
  return apiClient(`${API_URL}/auth/register`, {
    method: 'POST',
    body : registerData
  });
}

export function login(loginData) {
  return apiClient(`${API_URL}/auth/login`, {
    method: 'POST',
    credentials: "include",
    body : loginData
  });
}

export function searchJobList(findText) {
  return apiClient(`${API_URL}/job/search/list?findText=${findText}`, {
    method: 'GET',
    credentials: "include",
  });
}

export function searchJobInfo(jobCd) {
  return apiClient(`${API_URL}/job/search/info?jobCd=${jobCd}`, {
    method: 'GET',
    credentials: "include",
  });
}





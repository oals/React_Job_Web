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

export function searchJobList(findText,page,size,memberId,searchType) {
  return apiClient(`${API_URL}/job/search/list?findText=${findText}&page=${page}&size=${size}&memberId=${memberId}&searchType=${searchType}`, {
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

export function insertJobQuestion(result, memberEmail,testType) {
  return apiClient(`${API_URL}/test/insert/question`, {
    method: 'POST',
    credentials: "include",
     headers: {
         'Content-Type': 'application/json',
     },
     body: {
           memberEmail: memberEmail,
           jobTestResult: result,
           testType: testType,
     },
  });
}

export function searchNews(findText,page,size) {
  return apiClient(`${API_URL}/news/search?findText=${findText}&page=${page}&size=${size}`, {
    method: 'GET',
    credentials: "include",
  });
}

export function searchPopularJob() {
  return apiClient(`${API_URL}/job/search/popular`, {
    method: 'GET',
    credentials: "include",
  });
}

export function saveBookmarks(memberId, jobCd, isBookmark) {

  return apiClient(`${API_URL}/job/bookmark/insert`, {
    method: 'POST',
    credentials: "include",
    body : {
        memberId: memberId,
        jobCd: jobCd,
        bookmark: isBookmark
    }
  });
}






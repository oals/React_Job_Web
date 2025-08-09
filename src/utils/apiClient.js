
const defaultHeaders = {
  'Content-Type': 'application/json',
};


async function refreshAccessToken() {

  const memberEmail = localStorage.getItem('memberEmail');

  const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      ...defaultHeaders
    },
    credentials: 'include',
    body: JSON.stringify({
      memberEmail: memberEmail
    })
  });


  if (!res.ok) {
    throw new Error('Token refresh failed');
  }
  return true;
}


export async function apiClient(
  endpoint,
  { method = 'GET', body, headers, credentials = 'same-origin', retry = true, ...rest } = {}
) {

  const config = {
    method,
    headers: { ...defaultHeaders, ...headers },
    credentials,
    ...rest,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  let res = await fetch(endpoint, config);

  if (res.status === 401 && retry) {
     try {
       await refreshAccessToken();

       return await apiClient(endpoint, {
         method,
         body,
         headers,
         credentials,
         retry: false,
         ...rest,
       });
     } catch (err) {
       console.error('Failed to refresh token:', err);
       throw new Error('Session expired. Please log in again.');
     }
   } else {
     if (!res.ok) {
       const errText = await res.text();
       throw new Error(errText || res.statusText);
     }
  }

  return res;
}
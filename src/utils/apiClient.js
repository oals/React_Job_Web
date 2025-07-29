
const defaultHeaders = {
  'Content-Type': 'application/json',
};


export async function apiClient(
  endpoint,
  { method = 'GET', body, headers, credentials = 'same-origin', ...rest } = {}
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

  const res = await fetch(`${endpoint}`, config);

  if (!res.ok) {
      const errText = await res.text();

      if (res.status === 401) {
        return res;
      }

      throw new Error(errText || res.statusText);
    }


  return res;
}
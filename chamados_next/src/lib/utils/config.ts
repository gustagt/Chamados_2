export const api = process.env.NEXT_PUBLIC_API_HOST || "/";

export const requestConfig = (method:string, data:any, token?:string, image=null) => {
  let config: RequestInit;

  if (image) {
    config = {
      method: method,
      body: data,
      headers: {},
    };
  } else if (method === "DELETE" || data === null) {
    config = {
      method: method,
      headers: {},
    };
  } else {
    config = {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  if (!config.headers) {
    config.headers = {};
  }

  if (token) {
    config.headers = {
      ...config.headers, // Preserva os headers existentes
      Authorization: token,
    };
  }

  return config;
};

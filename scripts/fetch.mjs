import { getAccessToken } from "./accessToken.mjs";

async function doFetch(url, customOptions = {}, shouldUseAuth = false) {
    try {
      const fetchOptions = {
        headers: {
          "Content-Type": "application/json",
        },
        ...customOptions,
      };
  
      if (shouldUseAuth) {
        const accessToken = getAccessToken();
        fetchOptions.headers.Authorization = `Bearer ${accessToken}`;
      }
      const response = await fetch(url, fetchOptions);
      const json = await response.json();
      return json;
    } catch (error) {
      throw new Error(error);
    }
  }
  
  export { doFetch };
  
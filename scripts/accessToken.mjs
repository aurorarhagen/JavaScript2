function setAccessToken(accessToken) {
    localStorage.setItem("accessToken", accessToken);
  }
  
  function getAccessToken() {
    const accessToken = localStorage.getItem("accessToken");
    return accessToken;
  }
  
  export { setAccessToken, getAccessToken };
  
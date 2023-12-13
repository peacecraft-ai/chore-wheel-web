import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    return sessionStorage.getItem('access_token');
  };

  const [token, setToken] = useState(getToken());

  const saveToken = token => {
    if(typeof token == 'undefined') {
      sessionStorage.removeItem('access_token');
    }
    else {
      sessionStorage.setItem('access_token', token);
    }
    
    setToken(token);
  };

  return {
    setToken: saveToken,
    token
  }
}

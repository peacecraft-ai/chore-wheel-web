import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    return sessionStorage.getItem('access_token');
  };

  const [token, setToken] = useState(getToken());

  const saveToken = token => {
    sessionStorage.setItem('access_token', token);
    setToken(token);
  };

  return {
    setToken: saveToken,
    token
  }
}

import { keyToken, keyUser } from '@/constant/auth';
import React, { useContext, useState } from 'react';

export const AuthContext = React.createContext({
  user: {},
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(keyUser)));
  const login = (data) => {
    localStorage.setItem(keyUser, JSON.stringify(data));
    setUser(data);

    localStorage.setItem(keyToken, data.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(keyUser);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

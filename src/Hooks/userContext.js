import { useState, createContext, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [username, setUsername] = useState(window.localStorage.getItem('username'));

  useEffect(() => {
    window.localStorage.setItem('username', username);
    setUsername(username);
  }, [username]);

  const value = {
    username,
    setUsername,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContext;
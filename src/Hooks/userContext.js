import { useState, createContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [username, setUsername] = useState("");

  const value = {
    username,
    setUsername,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContext;

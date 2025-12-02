import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedUser = sessionStorage.getItem("user");
    const savedToken = sessionStorage.getItem("token");

    if (savedUser && savedToken) {
      // limpiamos token desde el comienzo
      const cleanToken = savedToken.trim().replace(/\s+/g, "");
      setUser(JSON.parse(savedUser));
      setToken(cleanToken);
    }
  }, []);

  const login = (data) => {
    const cleanToken = data.token.trim().replace(/\s+/g, "");

    setUser(data.user);
    setToken(cleanToken);

    sessionStorage.setItem("user", JSON.stringify(data.user));
    sessionStorage.setItem("token", cleanToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

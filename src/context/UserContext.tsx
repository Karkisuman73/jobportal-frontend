import { jwtDecode } from "jwt-decode";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";

type User = {
  _id: string;
  name: string;
  username: string;
  email: string;
};

// Define the shape of the decoded token
type DecodedToken = {
  id: string;
  exp?: number;
  iat?: number;
};

type UserContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  userid: () => string | null;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userData: User) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  const userid = (): string | null => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
      const decoded = jwtDecode<DecodedToken>(token);
      return decoded.id;
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout, userid }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

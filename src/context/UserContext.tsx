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
  email: string;
  
};

type UserContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  userid:()=> string | null;
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
    // setTimeout(() => {
    // window.location.reload();
    //  }, 1000);
    navigate("/");
  };

  const userid = ()=>{
    const token= localStorage.getItem("token")
     
      const decode=jwtDecode(token)
      const userId= decode.id
      return userId
     
  }

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

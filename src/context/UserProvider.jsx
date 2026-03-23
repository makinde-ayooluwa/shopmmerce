import useLocalStorage from "../hooks/useLocalStorage";
import { UserContext } from "./UserContext";

export default function UserProvider({ children }) {
  const [user, setUser] = useLocalStorage("user");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

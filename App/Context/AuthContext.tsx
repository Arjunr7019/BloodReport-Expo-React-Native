import { createContext , Dispatch, SetStateAction} from "react";

type AuthContextType = {
    userData: any | null;
    setUserData: Dispatch<SetStateAction<any | null>>;
  };

export const AuthContext = createContext<AuthContextType | null>(null)
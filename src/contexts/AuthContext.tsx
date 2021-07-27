import React, {createContext, useCallback} from "react";

import api from "../services/api";

interface SignInCredentials {
  email: string;
  senha: string;
}

interface AuthContextData {
  user: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({children}) => {
  const signIn = useCallback( async ({email, senha}) => {
    const response = await api.post("authenticate", {
      email,
      senha
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{user: "Cauã", signIn}}>
      {children}
    </AuthContext.Provider>
  );
}
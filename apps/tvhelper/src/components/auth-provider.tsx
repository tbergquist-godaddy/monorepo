import { createContext, ReactNode, useContext, useMemo } from 'react';
import { invariant } from '@adeira/js';
import jwtDecode from 'jwt-decode';

interface Claims {
  username: string;
}
interface AuthStateProps {
  token?: string | null;
}
interface AuthState extends AuthStateProps {
  isLoggedIn: boolean;
  username: string | null;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

interface Props extends AuthStateProps {
  children: ReactNode;
}

export const AuthProvider = ({ children, token }: Props): JSX.Element => {
  const state = useMemo(
    () => ({
      token,
      isLoggedIn: token != null,
      username: token != null ? jwtDecode<Claims>(token).username : null,
    }),
    [token],
  );
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthState => {
  const context = useContext(AuthContext);
  invariant(
    context != null,
    'Auth context is not defined, did you forget to add the AuthProvider?',
  );
  return context;
};

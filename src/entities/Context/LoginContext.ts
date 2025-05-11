import { createContext } from 'react';

export interface UserContextType {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

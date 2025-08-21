import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AuthUser = {
  id: string;
  pseudo: string;
  email: string;
  role: string;
};

type AuthState = {
  user: AuthUser | null;
  token: string | null;
  isLoggedIn: boolean;
  setUser: (user: AuthUser, token: string) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      user: null,
      token: null,
      isLoggedIn: false,
      setUser: (user, token) => set({ user, token, isLoggedIn: true }),
      logout: () => {
        set({ user: null, token: null, isLoggedIn: false });
        localStorage.removeItem("auth-store");
      },
    }),
    {
      name: "auth-store",
    }
  )
);


import { create } from 'zustand';
type Role = "admin" | "user" | null;

type AuthState = {

  isLoggedIn: boolean;
  role: Role;
  login: (role: Role) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({

  isLoggedIn: false,
  role: null,
  login: (role) => set({ isLoggedIn: true, role }),
  logout: () => set({ isLoggedIn: false, role: null }),
}));





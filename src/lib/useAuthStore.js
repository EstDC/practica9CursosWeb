import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
      updateUser: (updatedUser) => set({ user: updatedUser }),//actualiza el usuario en store
    }),
    {
      name: 'auth-store', // clave única para guardar en localStorage
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;

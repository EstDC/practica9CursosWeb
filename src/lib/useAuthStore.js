import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      // Autenticación
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
      updateUser: (updatedUser) => set({ user: updatedUser }),

      // Configuración de la aplicación (idioma y moneda)
      language: 'es',
      currency: 'EUR',
      setLanguage: (lang) => set({ language: lang }),
      setCurrency: (curr) => set({ currency: curr }),
    }),
    {
      name: 'app-store', // clave única para guardar en localStorage
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;

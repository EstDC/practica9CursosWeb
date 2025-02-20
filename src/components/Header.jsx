import React, { useState, useEffect } from "react";
import useAuthStore from "../lib/useAuthStore";
import SearchBar from "./SearchBar.jsx";

export default function Header({ postsData, onOpenCart, onOpenLogin }) {
  const [isScrolled, setIsScrolled] = useState(false);
  // Obtenemos el usuario y las funciones de autenticación desde el store
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  // Obtener idioma y moneda desde el store global (valores por defecto "es" y "EUR")
  const language = useAuthStore((state) => state.language) || "es";
  const currency = useAuthStore((state) => state.currency) || "EUR";

  // Obtener setters para actualizar idioma y moneda desde el store
  const setLanguage = useAuthStore((state) => state.setLanguage);
  const setCurrency = useAuthStore((state) => state.setCurrency);

  // Cargar la configuración desde localStorage al montar el componente (opcional para sincronizar store con localStorage)
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    const storedCurrency = localStorage.getItem("currency");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
    if (storedCurrency) {
      setCurrency(storedCurrency);
    }
  }, [setLanguage, setCurrency]);

  // Funciones para actualizar idioma y moneda y guardarlos en localStorage
  function handleLanguageChange(newLang) {
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  }

  function handleCurrencyChange(newCurr) {
    setCurrency(newCurr);
    localStorage.setItem("currency", newCurr);
  }

  // Efecto para actualizar el estado de desplazamiento
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${isScrolled ? "bg-red-600" : "bg-black"} text-white shadow z-30 sticky top-0 transition-colors duration-300`}>
      <div className="container mx-auto py-6 px-8 flex items-center justify-between">
        <div className="flex items-center space-x-8 relative">
          <h1 className="font-bold relative">
            <span className="text-white text-5xl font-wolkeroutline relative">
              Pixel
            </span>
            <span className="text-red-500 text-8xl font-quintaras absolute top-4 left-20 z-10">
              Flow
            </span>
          </h1>
        </div>
        <SearchBar cursos={postsData} />
        <nav>
          <ul className="flex space-x-8 items-center text-lg font-semibold uppercase">
            <li>
              <a
                href="/"
                className="relative text-white hover:text-red-500 transition duration-300 after:block after:content-[''] after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-0 hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li>
              {user ? (
                <button
                  onClick={onOpenCart}
                  className="relative text-white hover:text-red-500 transition duration-300"
                >
                  CART
                </button>
              ) : (
                <button
                  onClick={() => alert('Debes iniciar sesión para ver tu carrito')}
                  className="relative text-white hover:text-red-500 transition duration-300"
                >
                  CESTA
                </button>
              )}
            </li>
            {user && (
              <li>
                <a
                  href="/sections/section?misCursos=true"
                  className="relative text-white hover:text-red-500 transition duration-300 after:block after:content-[''] after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-0 hover:after:w-full"
                >
                  MIS CURSOS
                </a>
              </li>
            )}
            <li>
              {user ? (
                <div className="flex items-center gap-2">
                  <span className="text-white">Hola, {user.nombre_usuario}</span>
                  <button
                    onClick={logout}
                    className="relative text-white hover:text-red-500 transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={onOpenLogin}
                  className="relative text-white hover:text-red-500 transition duration-300"
                >
                  LOG IN
                </button>
              )}
            </li>
          </ul>
        </nav>
        {/* Selectores para idioma y moneda */}
        <div className="flex items-center gap-4">
          <select
            className="bg-gray-800 text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
          <select
            className="bg-gray-800 text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            value={currency}
            onChange={(e) => handleCurrencyChange(e.target.value)}
          >
            <option value="EUR">€</option>
            <option value="USD">$</option>
            <option value="GBP">£</option>
          </select>
        </div>
      </div>
    </header>
  );
}

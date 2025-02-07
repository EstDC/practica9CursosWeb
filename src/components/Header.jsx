import React, { useState, useEffect } from "react";
import useAuthStore from "../lib/useAuthStore";
import SearchBar from "./SearchBar.jsx";


export default function Header({ postsData, onOpenCart, onOpenLogin }) {
  const [isScrolled, setIsScrolled] = useState(false);
  // Obtenemos el usuario y la función logout desde el store
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

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

      </div>
    </header>
  );
}

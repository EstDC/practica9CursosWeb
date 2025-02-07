import React, { useState, useRef, useEffect } from "react";
import useAuthStore from '../lib/useAuthStore';
import '../styles/global.css';

export default function LoginDialog({ onClose, usuarios }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const modalRef = useRef(null);
  const login = useAuthStore((state) => state.login);

  // Cierra el modal si se hace clic fuera de él
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  function handleLogin(e) {
    e.preventDefault();

    const foundUser = usuarios.find(
      (u) => u.nombre_usuario === username && u.contraseña === password
    );

    if (foundUser) {
      // Actualizamos el estado global con el usuario encontrado
      login(foundUser);
      onClose();
    } else {
      setErrorMsg("Usuario o contraseña incorrectos");
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-6xl mb-4 font-york">Iniciar Sesión</h2>
        {errorMsg && <p className="text-red-500 mb-2">{errorMsg}</p>}
        <form onSubmit={handleLogin} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border px-2 py-1"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-2 py-1"
          />
          <button type="submit" className="bg-red-500 text-white py-2 mt-2 rounded">
            Entrar
          </button>
        </form>
        <button onClick={onClose} className="mt-4 bg-gray-400 text-white py-1 px-3 rounded">
          Cerrar
        </button>
      </div>
    </div>
  );
}

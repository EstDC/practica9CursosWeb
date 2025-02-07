import React from 'react';
import useAuthStore from '../lib/useAuthStore';

export default function VideoButton({ curso }) {
  const user = useAuthStore((state) => state.user);
  // Se verifica que el usuario exista y que su array "comprado" incluya el id del curso
  const isPurchased = user && user.comprado && user.comprado.includes(curso.id);

  if (isPurchased) {
    return (
      <a 
        href={curso.video}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-black hover:bg-gray-900 text-white font-bold py-3 rounded-lg mt-4 text-center"
      >
        Ver Video de Introducción
      </a>
    );
  } else {
    return (
      <button 
        disabled
        className="w-full bg-gray-500 text-white font-bold py-3 rounded-lg mt-4 text-center cursor-not-allowed"
      >
        Debes comprar el curso para desbloquear el contenido
      </button>
    );
  }
}

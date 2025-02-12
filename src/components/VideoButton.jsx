import React, { useState } from 'react';
import useAuthStore from '../lib/useAuthStore';

export default function VideoButton({ curso }) {
  const user = useAuthStore((state) => state.user);
  const [showVideo, setShowVideo] = useState(false);

  // Se verifica que el usuario exista y que su array "comprado" incluya el id del curso
  const isPurchased = user && user.comprado && user.comprado.includes(curso.id);

  // Función para abrir el modal
  const openVideo = (e) => {
    e.preventDefault();
    setShowVideo(true);
  };

  // Función para cerrar el modal
  const closeVideo = () => {
    setShowVideo(false);
  };

  // Si el curso no está comprado, se muestra un botón deshabilitado
  if (!isPurchased) {
    return (
      <button 
        disabled
        className="w-full bg-gray-500 text-white font-bold py-3 rounded-lg mt-4 text-center cursor-not-allowed"
      >
        Debes comprar el curso para desbloquear el contenido
      </button>
    );
  }

  return (
    <>
      <button
        onClick={openVideo}
        className="w-full bg-black hover:bg-gray-900 text-white font-bold py-3 rounded-lg mt-4 text-center"
      >
        Ver Video de Introducción
      </button>

      {showVideo && (
        // Modal
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Fondo semi-transparente que también cierra el modal al hacer click */}
          <div 
            className="fixed inset-0 bg-black opacity-50" 
            onClick={closeVideo}
          ></div>

          {/* Contenido del modal */}
          <div className="bg-white p-4 z-10 rounded-lg max-w-3xl w-full relative">
            {/* Botón para cerrar */}
            <button 
              onClick={closeVideo}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 font-bold"
            >
              X
            </button>

            {/* Contenedor para el video con relación de aspecto 16:9 */}
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={curso.video.replace('watch?v=', 'embed/')}
                title="Video de Introducción"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
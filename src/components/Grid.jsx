import React from 'react';

export default function Grid({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((curso) => (
        <div
          key={curso.id}
          className="bg-gradient-to-b from-black via-black/100 to-gray-900/70 rounded-lg shadow-lg overflow-hidden">          <div className="relative">
            <img
              src={curso.imagen}
              alt={curso.titulo}
              className="w-full h-56 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
          </div>
          {/* Contenido de la tarjeta */}
          <div className="p-4">
            <h3 className="text-white font-bold text-xl">{curso.titulo}</h3>
            <p className="text-gray-300 mt-2">{curso.resumen}</p>
            <p className="text-gray-300 font-semibold mt-4">
              Precio: €{curso.precio}
            </p>
         </div>
         <div className="flex justify-center p-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            <a href={`/blog/${curso.id}`}>+ Detalles</a>
        </button>
        </div>
        </div>
      ))}
    </div>
  );
}
import React from 'react';
import '../styles/global.css';
import { currencyRates } from '../lib/currencyRates';
import useAuthStore from '../lib/useAuthStore';

export default function Grid({ data }) {
  // Si el componente se ejecuta en el cliente, usaremos window y localStorage, si se está renderizando en el servidor, se asigna un valor por defecto
  const lang = typeof window !== "undefined" ? (useAuthStore.getState().language || "es") : "es";
  const selectedCurrency = typeof window !== "undefined" ? (useAuthStore.getState().currency || "EUR") : "EUR";
  const rate = currencyRates[selectedCurrency] || 1;
  const currencySymbol = selectedCurrency === "USD" ? "$" : selectedCurrency === "GBP" ? "£" : "€";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((curso) => {
        // Si el idioma es "en" y hay traducciones, se usan los textos en inglés; si no, se usan los originales.
        const displayTitle = lang === "en" && curso.traducciones && curso.traducciones.en && curso.traducciones.en.title
          ? curso.traducciones.en.title
          : curso.titulo;
        const displaySummary = lang === "en" && curso.traducciones && curso.traducciones.en && curso.traducciones.en.summary
          ? curso.traducciones.en.summary
          : curso.resumen;
        return (
          <div
            key={curso.id}
            className="bg-gradient-to-b from-black via-black/100 to-gray-900/70 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={curso.imagen}
                alt={displayTitle}
                className="w-full h-56 object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"
              ></div>
            </div>
            {/* Contenido de la tarjeta */}
            <div className="p-4">
              <h3 className="text-white font-bold text-xl">{displayTitle}</h3>
              <p className="text-gray-300 mt-2">{displaySummary}</p>
              <p className="text-gray-300 font-semibold mt-4">
                Precio: {currencySymbol}{(curso.precio * rate).toFixed(2)}
              </p>
            </div>
            <div className="flex justify-center p-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <a href={`/blog/${curso.id}`}>+ Detalles</a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React from "react";
import ReactLikeButton from '../components/updateLikes.jsx';
import AddToCartButton from '../components/AddToCartButton.jsx';
import VideoButton from '../components/VideoButton.jsx';
// Asegúrate de tener definido este objeto en ../lib/currencyRates
import { currencyRates } from '../lib/currencyRates';
import useAuthStore from '../lib/useAuthStore';

export default function PostCurso({ curso }) {
  // Leer idioma y moneda del store global useAuthStore (valores por defecto "es" y "EUR")
  const lang = useAuthStore((state) => state.language) || "es";
  const currency = useAuthStore((state) => state.currency) || "EUR";

  // Variables para mostrar textos según el idioma, usando traducciones si están disponibles
  const displayTitulo = lang === "en" && curso.traducciones?.en?.title
    ? curso.traducciones.en.title
    : curso.titulo;
  const displayResumen = lang === "en" && curso.traducciones?.en?.summary
    ? curso.traducciones.en.summary
    : curso.resumen;
  const displayDescripcion = lang === "en" && curso.traducciones?.en?.description
    ? curso.traducciones.en.description
    : curso.descripcion;
  const displayCategoria = lang === "en" && curso.traducciones?.en?.category
    ? curso.traducciones.en.category
    : curso.categoria;

  // Lógica para la moneda
  const rate = currencyRates[currency] || 1;
  const currencySymbol = currency === "USD" ? "$" : currency === "GBP" ? "£" : "€";
  const convertedPrice = (curso.precio * rate).toFixed(2);

  return (
    <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <figure className="w-full h-full">
          <img 
            src={curso.imagen} 
            alt={displayTitulo} 
            className="w-full h-full object-cover rounded-l-lg"
          />
        </figure>
        <div className="p-8 flex flex-col justify-between">
          <nav className="text-sm text-gray-500 mb-3">
            <a href="/" className="hover:text-gray-800">Home</a> › 
            <span className="text-gray-700">{displayTitulo}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{displayTitulo}</h1>
          <p className="text-gray-600 mt-3">{displayResumen}</p>
          <p className="text-gray-600 mt-3">{displayDescripcion}</p>
          <div className="mt-5">
            <h3 className="text-red-500 font-york text-5xl">Highlights:</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm mt-2">
              <li>Categoría: <strong>{displayCategoria}</strong></li>
              <li>Opinión: <strong>{curso.opinion}/5</strong></li>
              {curso.novedad && <li className="text-red-500">¡Nuevo Curso!</li>}
              {curso.oferta && <li className="text-green-500">¡En Oferta!</li>}
            </ul>
            <ReactLikeButton client:load postId={curso.id} initialLikes={curso.likes} />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg mt-5 flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Precio</p>
              <p className="text-2xl font-bold text-gray-900">
                {currencySymbol}{convertedPrice}
              </p>
            </div>
          </div>
          {curso.video && <VideoButton client:load curso={curso} />}
          <AddToCartButton client:load curso={curso} />
        </div>
      </div>
    </article>
  );
}

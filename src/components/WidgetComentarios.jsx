import { useState, useEffect } from "react";
import '../styles/global.css';

export default function WidgetComentarios({ slug }) {
  // Estado para almacenar los comentarios
  const [comentarios, setComentarios] = useState([]);

  // Cargar los comentarios desde localStorage al iniciar
  useEffect(() => {
    const comentariosGuardados =
      JSON.parse(localStorage.getItem(`comentarios-${slug}`)) || [];
    setComentarios(comentariosGuardados);
  }, [slug]);

  // Guardar los comentarios en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem(`comentarios-${slug}`, JSON.stringify(comentarios));
  }, [comentarios, slug]);

  // Manejo del envío de comentarios
  const handleEnvioComentario = (evento) => {
    evento.preventDefault();
    const nuevoComentario = evento.target.comentario.value.trim();
    if (nuevoComentario === "") return;

    // Agregar nuevo comentario a la lista
    setComentarios([...comentarios, nuevoComentario]);
    evento.target.reset();
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md border border-gray-100 max-w-3xl mx-auto my-28">
<h2 className="relative text-3xl font-bold text-black mb-4 border-b-2 border-red-500 pb-2 font-wolker flex items-center">
  <img src="/img/chat-bot.png" className="w-9 h-9 mr-2" alt="Opiniones" />
  <span className="absolute font-wolkeroutline text-3xl font-bold text-black left-12 top-1">
    Opiniones
  </span>
  <span className="relative font-wolker text-3xl font-bold text-black">
    Opiniones
  </span>
</h2>



      {/* Formulario de comentario */}
      <form className="flex flex-col mt-4" onSubmit={handleEnvioComentario}>
        <textarea
          className="w-full p-4 bg-gray-100 text-black border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500"
          name="comentario"
          rows="3"
          placeholder="Escribe tu comentario..."
          required
        ></textarea>
        <button
          type="submit"
          className="mt-4 px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700 transition duration-300 text-lg tracking-wide"
        >
          Enviar
        </button>
      </form>

      {/* Lista de comentarios */}
      <ul className="mt-6 space-y-4">
        {comentarios.map((texto, indice) => (
          <li
            key={indice}
            className="p-4 bg-white rounded-lg shadow-md border border-gray-300 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-lg font-semibold">
              {texto.charAt(0).toUpperCase()}
            </div>
            <p className="text-black text-lg">{texto}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

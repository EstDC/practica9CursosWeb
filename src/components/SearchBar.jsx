import React, { useState, useEffect, useRef } from 'react';

/**
 * SearchBar component to filter and display cursos.
 * @param {{ cursos: Array }} props 
 */
function SearchBar({ cursos }) {
  //console.log("Datos pasados al SearchBar:",  cursos); 
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef(null);
  const inputRef = useRef(null);

  //Cambios en el input
  const handleOnSearch = (e) => {
    const valor = e.target.value;
    setQuery(valor);

    if (valor.trim() === '') {
      setFilteredResults([]);
      setIsModalOpen(false);
      return;
    }

    const lowerTerm = valor.toLowerCase();
    // Filtrar cursos
    const filtrados = cursos.filter((curso) =>
      curso.titulo?.toLowerCase().includes(lowerTerm) ||
      curso.resumen?.toLowerCase().includes(lowerTerm) ||
      curso.descripcion?.toLowerCase().includes(lowerTerm)
    );
    console.log("Filtered Results:", filtrados); 
    setFilteredResults(filtrados);
    setIsModalOpen(true);
  };

  //Cerrar modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Cerrar modal al presionar Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Cerrar modal al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        inputRef.current &&
        !inputRef.current.contains(e.target)
      ) {
        closeModal();
      }
    };
    if (isModalOpen) {
      window.addEventListener('click', handleClickOutside);
    }
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isModalOpen]);

  return (
    <div className="relative">
      {/* Input */}
      <div className="p-4 w-96 ml-10">
        <input
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={handleOnSearch}
          className="w-full px-3 py-2 z-40 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
          ref={inputRef}
        />
      </div>

      {/* Resultados */}
     {/* Resultados */}
{isModalOpen && (
  <div
    className="absolute left-14 top-full mt-2 bg-black p-4 rounded-lg shadow-xl z-50 w-full md:w-10/12 max-h-96 overflow-y-auto"
    ref={modalRef}
  >
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-6xl text-white font-simplicity font-york">Resultados</h2>
      <button
        onClick={closeModal}
        className="text-2xl font-bold text-gray-400 hover:text-red-500 transition"
        aria-label="Cerrar búsqueda"
      >
        &times;
      </button>
    </div>

    <div className="space-y-4">
      {filteredResults.length > 0 ? (
        filteredResults.map((curso) => (
          <a
            key={curso.id}
            href={`/blog/${curso.id}`}
            className="flex items-center gap-4 bg-white p-3 rounded-lg hover:bg-gray-200 transition transform hover:scale-105"
            onClick={closeModal}
          >
            {curso.imagen && (
              <img
                src={curso.imagen}
                alt={curso.titulo}
                className="w-20 h-20 object-cover rounded-md shadow"
              />
            )}
            <div className="flex flex-col">
              <span className="text-lg font-bold text-red-500 hover:underline font-oswald text-center">
                {curso.titulo}
              </span>
              <p className="text-sm text-black text-center">{curso.resumen}</p>
            </div>
          </a>
        ))
      ) : (
        <p className="text-center text-black">No se encontraron resultados.</p>
      )}
    </div>
  </div>
)}

    </div>
  );
}

export default SearchBar;

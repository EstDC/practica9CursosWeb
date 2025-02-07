import React, { useState, useEffect } from 'react';
import Grid from './Grid.jsx';
import '../styles/global.css';

export default function CourseFilter({ cursos, initialCategory = '' }) {
  // Estados para cada filtro:
  const [selectedCategoria, setSelectedCategoria] = useState(initialCategory);
  const [selectedOpinion, setSelectedOpinion] = useState('');
  const [selectedPrecio, setSelectedPrecio] = useState('');
  const [filterNovedad, setFilterNovedad] = useState(false);
  const [filterOferta, setFilterOferta] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState(cursos);

  // Derivamos las categorías únicas del listado de cursos
  const categorias = [...new Set(cursos.map((curso) => curso.categoria))];

  // Cada vez que cambie alguno de los filtros o el listado original, actualiza el listado filtrado
  useEffect(() => {
    let filtered = cursos;

    // Filtrar por categoría
    if (selectedCategoria) {
      filtered = filtered.filter(
        (curso) => curso.categoria === selectedCategoria
      );
    }

    // Filtrar por opinión (mínima)
    if (selectedOpinion) {
      const minOpinion = parseFloat(selectedOpinion);
      filtered = filtered.filter((curso) => curso.opinion >= minOpinion);
    }

    // Filtrar por precio
    if (selectedPrecio) {
      if (selectedPrecio === 'low') {
        filtered = filtered.filter((curso) => curso.precio < 30);
      } else if (selectedPrecio === 'medium') {
        filtered = filtered.filter((curso) => curso.precio >= 30 && curso.precio <= 60);
      } else if (selectedPrecio === 'high') {
        filtered = filtered.filter((curso) => curso.precio > 60);
      }
    }

    // Filtrar por novedad
    if (filterNovedad) {
      filtered = filtered.filter((curso) => curso.novedad === true);
    }

    // Filtrar por oferta
    if (filterOferta) {
      filtered = filtered.filter((curso) => curso.oferta === true);
    }

    setFilteredCourses(filtered);
  }, [selectedCategoria, selectedOpinion, selectedPrecio, filterNovedad, filterOferta, cursos]);

  return (
    <div className="p-14 bg-black text-white rounded-lg shadow-md">
      {/* Barra de filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
        
        {/* Filtro por categoría */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-300 mb-2">Categoría:</label>
          <select
            value={selectedCategoria}
            onChange={(e) => setSelectedCategoria(e.target.value)}
            className="p-2 bg-gray-800 text-white border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Todas</option>
            {categorias.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por opinión mínima */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-300 mb-2">Opiniones:</label>
          <select
            value={selectedOpinion}
            onChange={(e) => setSelectedOpinion(e.target.value)}
            className="p-2 bg-gray-800 text-white border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Todas</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="4.5">4.5+</option>
          </select>
        </div>

        {/* Filtro por precio */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-300 mb-2">Precio:</label>
          <select
            value={selectedPrecio}
            onChange={(e) => setSelectedPrecio(e.target.value)}
            className="p-2 bg-gray-800 text-white border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Todos</option>
            <option value="low">Menos de 30€</option>
            <option value="medium">30€ a 60€</option>
            <option value="high">Más de 60€</option>
          </select>
        </div>

        {/* Filtro por novedad (switch) */}
        <div className="flex items-center gap-2 m-auto">
          <label className="font-semibold text-gray-300">Solo novedades</label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filterNovedad}
              onChange={(e) => setFilterNovedad(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-500 rounded-full peer dark:bg-gray-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
          </label>
        </div>

        {/* Filtro por oferta (switch) */}
        <div className="flex items-center gap-2 m-auto">
          <label className="font-semibold text-gray-300">Solo ofertas</label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filterOferta}
              onChange={(e) => setFilterOferta(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-500 rounded-full peer dark:bg-gray-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
          </label>
        </div>
      </div>

      {/* Grid de cursos filtrados */}
      <div className="mt-24">
        <Grid data={filteredCourses} />
      </div>
    </div>
  );
}

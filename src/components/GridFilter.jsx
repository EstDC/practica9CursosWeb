import React, { useEffect, useState } from "react";
import Grid from "./Grid.jsx";

const normalizeString = (str) => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
    .replace(/\s+/g, "-") // Convertir espacios a guiones
    .trim();
};

export default function GridFilter({ cursos, initialCategory }) {
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    if (!initialCategory) {
      setFilteredCourses([]);
      return;
    }

    const targetCategory = normalizeString(initialCategory);
    
    const filtered = cursos.filter((curso) => {
      const courseCategory = normalizeString(curso.categoria);
      return courseCategory === targetCategory;
    });

    setFilteredCourses(filtered);
  }, [initialCategory, cursos]);

  return (
    <div className="mt-8">
      {filteredCourses.length > 0 ? (
        <Grid data={filteredCourses} />
      ) : (
        <p className="text-center text-gray-400 py-12 border border-dashed rounded-lg">
          {initialCategory 
            ? `No hay cursos en "${initialCategory}"`
            : "Selecciona una categoría"}
        </p>
      )}
    </div>
  );
}
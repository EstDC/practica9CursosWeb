import React from 'react';
import useAuthStore from '../lib/useAuthStore';
import Grid from './Grid.jsx';
import '../styles/global.css';

export default function PurchasedCourses({ cursos }) {
  // Obtenemos el usuario global (su propiedad "comprado")
  const user = useAuthStore((state) => state.user);

  // Obtener el idioma desde el store global (por defecto "es")
  const lang = useAuthStore((state) => state.language) || "es";

  // Constantes de textos fijos para el componente según el idioma
  const texts = {
    es: {
      noCourses: "No tienes cursos comprados",
      noCoursesFound: "No se encontraron cursos comprados",
      headerLeft: "Mis Cursos",
      headerRight: "Comprados"
    },
    en: {
      noCourses: "You don't have any purchased courses",
      noCoursesFound: "No purchased courses found",
      headerLeft: "My Courses",
      headerRight: "Purchased"
    }
  };
  const t = texts[lang] || texts.es;

  // Si el usuario no está logueado o no tiene cursos comprados, mostrar un mensaje
  if (!user || !user.comprado || user.comprado.length === 0) {
    return (
      <div className="text-center text-white">
        <p className="text-xl font-semibold">{t.noCourses}</p>
      </div>
    );
  }

  // Filtrar los cursos cuyos id estén en el array "comprado"
  const purchasedCourses = cursos.filter((curso) =>
    user.comprado.includes(curso.id)
  );

  return (
    <div>
      <div className="my-8">
        <h2 className="flex items-center mb-4 border-b-2 border-red-500 pb-2 whitespace-nowrap">
          <div className="relative inline-block">
            <span className="absolute top-1 left-2 font-wolkeroutline text-5xl font-bold text-white">
              {t.headerLeft}
            </span>
            <span className="font-wolker text-5xl font-bold text-white">
              {t.headerLeft}
            </span>
          </div>
          <div className="ml-4 inline-block">
            <span className="font-york text-9xl text-red-500">
              {t.headerRight}
            </span>
          </div>
        </h2>
      </div>
      {purchasedCourses.length > 0 ? (
        <Grid data={purchasedCourses} />
      ) : (
        <div className="text-center text-white">
          <p className="text-xl font-semibold">{t.noCoursesFound}</p>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import useAuthStore from '../lib/useAuthStore';
import Grid from './Grid.jsx';

export default function PurchasedCourses({ cursos }) {
  // Obtenemos el usuario global (su propiedad "comprado")
  const user = useAuthStore((state) => state.user);

  // Si el usuario no está logueado o no tiene cursos comprados, mostrar un mensaje
  if (!user || !user.comprado || user.comprado.length === 0) {
    return (
      <div className="text-center text-white">
        <p className="text-xl font-semibold">No tienes cursos comprados</p>
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
              Mis Cursos
            </span>
            <span className="font-wolker text-5xl font-bold text-white">
              Mis Cursos
            </span>
          </div>
          <div className="ml-4 inline-block">
            <span className="font-york text-9xl text-red-500">
              Comprados
            </span>
          </div>
        </h2>
      </div>
      {purchasedCourses.length > 0 ? (
        <Grid data={purchasedCourses} />
      ) : (
        <div className="text-center text-white">
          <p className="text-xl font-semibold">No se encontraron cursos comprados</p>
        </div>
      )}
    </div>
  );
}

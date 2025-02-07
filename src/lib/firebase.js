export const BASE_URL = "https://cursosweb-2af8d-default-rtdb.europe-west1.firebasedatabase.app";
/**
 * Fetch posts from Firebase Realtime Database
 */
export let cursosCache = [];
export let usuariosCache = [];
export const fetchCursosYUsuarios = async () => {
  // Si ya tenemos datos en memoria, devuélvelos
  if (cursosCache.length > 0 && usuariosCache.length > 0) {
    return { cursos: cursosCache, usuarios: usuariosCache };
  }

  try {
    // Hacemos petición GET a la raíz (/.json)
    const resp = await fetch(`${BASE_URL}/.json`);
    if (!resp.ok) {
      throw new Error("Error al obtener los datos de Firebase");
    }

    // data => { cursos: [ ... ], usuarios: [ ... ] }
    const data = await resp.json();
    /* console.log("Firebase data:", data); */

    // Guardamos la info en caché
    cursosCache = data.cursos || [];
    usuariosCache = data.usuarios || [];

    return {
      cursos: cursosCache,
      usuarios: usuariosCache,
    };
  } catch (error) {
    console.error("Error fetching cursos/usuarios:", error);
    // Si hay error, devuelve arreglos vacíos
    return {
      cursos: [],
      usuarios: [],
    };
  }
};

/* export const updateUsuario = async (index, updatedUserData) => {
  try {
    const resp = await fetch(`${BASE_URL}/usuarios/${index}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUserData),
    });

    if (!resp.ok) {
      throw new Error("Error al actualizar usuario en Firebase");
    }

    const data = await resp.json();
    return data; // el usuario actualizado o {}
  } catch (err) {
    console.error("Error en updateUsuario:", err);
    return null;
  }
}; */
export const updateUsuario = async (userId, updatedUserData) => {
  try {
    const resp = await fetch(`${BASE_URL}/usuarios/${userId}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUserData),
    });
    if (!resp.ok) {
      throw new Error("Error al actualizar usuario en Firebase");
    }
    const data = await resp.json();
    return data;
  } catch (err) {
    console.error("Error en updateUsuario:", err);
    return null;
  }
};
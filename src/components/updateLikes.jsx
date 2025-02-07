import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../lib/firebase.js';

function LikeButton({ postId, initialLikes }) {
  // Estado local para likes
  const [likes, setLikes] = useState(initialLikes || 0);

  // Efecto para cargar los likes desde Firebase al montar el componente
  useEffect(() => {
    async function fetchLikes() {
      try {
        const index = Number(postId) - 1;
        if (isNaN(index) || index < 0) {
          console.error(`postId inválido: ${postId}`);
          return;
        }

        const url = `${BASE_URL}/cursos/${index}/likes.json`;

        const resp = await fetch(url);
        if (!resp.ok) throw new Error('Error al obtener los likes');

        const currentLikes = await resp.json();
        setLikes(currentLikes ?? 0);
      } catch (error) {
        console.error(`Error al obtener los likes para el post ${postId}:`, error);
      }
    }

    fetchLikes();
  }, [postId]);

  // Función para actualizar likes en Firebase
  async function updateLikes() {
    try {
      const index = Number(postId) - 1;
      if (isNaN(index) || index < 0) {
        console.error(`postId inválido: ${postId}`);
        return;
      }

      const url = `${BASE_URL}/cursos/${index}/likes.json`;

      // Obtener likes actuales
      const resp = await fetch(url);
      if (!resp.ok) throw new Error('Error al obtener los likes');
      const currentLikes = (await resp.json()) ?? 0;

      // Incrementar en 1 y actualizar Firebase
      const newLikes = currentLikes + 1;
      const updateResp = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLikes),
      });

      if (!updateResp.ok) throw new Error('Error al actualizar los likes');

      // Actualizar estado
      setLikes(newLikes);
    } catch (error) {
      console.error(`Error al actualizar los likes para el post ${postId}:`, error);
    }
  }

  return (
    <section className="mt-2 text-gray-700 text-sm">
      <button 
        onClick={updateLikes} 
        className="flex items-center text-gray-700 text-sm hover:text-gray-800">
        Likes:<span className="ml-2"><strong>{likes}</strong></span>
        <img src="/img/likes.png" className="w-5 h-5 inline-block ml-2" alt="Like icon" />
      </button>
    </section>
  );
}

export default LikeButton;

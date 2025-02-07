import React from 'react';
import useAuthStore from '../lib/useAuthStore';
import { updateUsuario } from '../lib/firebase';

export default function AddToCartButton({ curso }) {
  const user = useAuthStore((state) => state.user);
  const updateUser = useAuthStore((state) => state.updateUser);

  async function addToCart() {
    if (!user) {
      alert("Debes iniciar sesión para agregar cursos al carrito");
      return;
    }
    if (user.carrito && user.carrito.includes(curso.id)) {
      alert("Este curso ya está en tu carrito");
      return;
    }
    const updatedCarrito = user.carrito ? [...user.carrito, curso.id] : [curso.id];
    const updatedUser = { ...user, carrito: updatedCarrito };

    const result = await updateUsuario(user.id, updatedUser);
    if (result) {
      updateUser(updatedUser);
      alert("Curso agregado al carrito");
    } else {
      alert("Error al actualizar el carrito");
    }
  }

  return (
    <button
      onClick={addToCart}
      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg mt-4"
    >
      Comprar Curso
    </button>
  );
}

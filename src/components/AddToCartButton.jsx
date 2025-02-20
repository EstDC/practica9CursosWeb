import React from 'react';
import useAuthStore from '../lib/useAuthStore';
import { updateUsuario } from '../lib/firebase';

export default function AddToCartButton({ curso }) {
  const user = useAuthStore((state) => state.user);
  const updateUser = useAuthStore((state) => state.updateUser);

  // Obtener el idioma desde el store global useAuthStore en lugar de localStorage
  const lang = useAuthStore((state) => state.language) || "es";

  const texts = {
    es: {
      notLogged: "Debes iniciar sesión para agregar cursos al carrito",
      alreadyInCart: "Este curso ya está en tu carrito",
      courseAdded: "Curso agregado al carrito",
      updateError: "Error al actualizar el carrito",
      buttonText: "Comprar Curso"
    },
    en: {
      notLogged: "You must log in to add courses to the cart",
      alreadyInCart: "This course is already in your cart",
      courseAdded: "Course added to cart",
      updateError: "Error updating the cart",
      buttonText: "Buy Course"
    }
  };
  const t = texts[lang] || texts.es;

  async function addToCart() {
    if (!user) {
      alert(t.notLogged);
      return;
    }
    if (user.carrito && user.carrito.includes(curso.id)) {
      alert(t.alreadyInCart);
      return;
    }
    const updatedCarrito = user.carrito ? [...user.carrito, curso.id] : [curso.id];
    const updatedUser = { ...user, carrito: updatedCarrito };

    const result = await updateUsuario(user.id, updatedUser);
    if (result) {
      updateUser(updatedUser);
      alert(t.courseAdded);
    } else {
      alert(t.updateError);
    }
  }

  return (
    <button
      onClick={addToCart}
      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg mt-4"
    >
      {t.buttonText}
    </button>
  );
}

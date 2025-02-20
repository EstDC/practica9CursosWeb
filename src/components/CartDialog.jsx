import React, { useRef, useEffect } from "react";
import { updateUsuario } from "../lib/firebase";
import useAuthStore from "../lib/useAuthStore";
import { currencyRates } from "../lib/currencyRates";
import '../styles/global.css';

export default function CartDialog({ user, onClose, onUpdateUser, cursos }) {
  const modalRef = useRef(null);
  // Obtenemos la función updateUser del store global
  const updateUser = useAuthStore((state) => state.updateUser);

  // Obtener idioma y moneda desde el store global useAuthStore
  const lang = useAuthStore((state) => state.language) || "es";
  const selectedCurrency = useAuthStore((state) => state.currency) || "EUR";
  const rate = currencyRates[selectedCurrency] || 1;
  const currencySymbol = selectedCurrency === "USD" ? "$" : selectedCurrency === "GBP" ? "£" : "€";

  // Constantes de traducción para textos fijos
  const texts = {
    es: {
      title: "Tu Carrito",
      empty: "No tienes cursos en el carrito",
      total: "Total",
      clearCart: "Vaciar Carrito",
      purchase: "Comprar",
      close: "Cerrar"
    },
    en: {
      title: "Your Cart",
      empty: "No items selected",
      total: "Total",
      clearCart: "Clear Cart",
      purchase: "Purchase",
      close: "Close"
    }
  };
  const t = texts[lang] || texts.es;

  // Cierra el modal si se hace clic fuera de él
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Filtrar los cursos que están en el carrito del usuario
  const cartCourses = cursos.filter((course) => user.carrito.includes(course.id));
  // Calcula el total convertido
  const total = (cartCourses.reduce((acc, course) => acc + course.precio, 0) * rate).toFixed(2);

  async function handleClearCart() {
    const updatedUser = { ...user, carrito: [] };
    try {
      const result = await updateUsuario(user.id, updatedUser);
      if (result) {
        // Actualizamos el store global
        updateUser(updatedUser);
        if (onUpdateUser) onUpdateUser(updatedUser, false);
      } else {
        alert("Error al actualizar el carrito en Firebase");
      }
    } catch (error) {
      console.error("Error en handleClearCart:", error);
      alert("Error al actualizar el carrito en Firebase");
    }
  }

  async function handlePurchase() {
    if (cartCourses.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
    const updatedPurchased = [...(user.comprado || [])];
    cartCourses.forEach((course) => {
      if (!updatedPurchased.includes(course.id)) {
        updatedPurchased.push(course.id);
      }
    });
    const updatedUser = {
      ...user,
      comprado: updatedPurchased,
      carrito: [],
    };
    try {
      const result = await updateUsuario(user.id, updatedUser);
      if (result) {
        updateUser(updatedUser);
        if (onUpdateUser) onUpdateUser(updatedUser, true);
        onClose(); // Cierra el modal tras la compra
      } else {
        alert("Error al realizar la compra en Firebase");
      }
    } catch (error) {
      console.error("Error en handlePurchase:", error);
      alert("Error al realizar la compra en Firebase");
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">{t.title}</h2>

        {cartCourses.length === 0 ? (
          <p>{t.empty}</p>
        ) : (
          <ul className="mb-4 space-y-2">
            {cartCourses.map((course) => (
              <li key={course.id} className="border-b py-2 flex justify-between">
                <span className="font-semibold">{course.titulo}</span>
                <span>{currencySymbol}{(course.precio * rate).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}

        <p className="font-bold mb-4 text-lg">
          {t.total}: {currencySymbol}{total}
        </p>

        <div className="flex gap-2">
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
          >
            {t.clearCart}
          </button>
          <button
            onClick={handlePurchase}
            className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
          >
            {t.purchase}
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-4 bg-gray-400 text-white py-1 px-3 rounded hover:bg-gray-500"
        >
          {t.close}
        </button>
      </div>
    </div>
  );
}

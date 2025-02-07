import React, { useState } from 'react'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import LoginDialog from './LoginDialog.jsx'
import CartDialog from './CartDialog.jsx'
import useAuthStore from '../lib/useAuthStore';
import '../styles/global.css';

export default function HomePage({ cursos, usuarios, showHero = true }) {
  // Obtenemos el usuario global desde el store
  const user = useAuthStore((state) => state.user);

  // Estados locales para mostrar/ocultar modales de Login y Carrito
  const [showLogin, setShowLogin] = useState(false)
  const [showCart, setShowCart] = useState(false)
  // Estado para mensaje de éxito (login o compra)
  const [successMessage, setSuccessMessage] = useState("")

  // Funciones para abrir/cerrar modales
  function handleOpenLogin() {
    setShowLogin(true)
  }
  function handleCloseLogin() {
    setShowLogin(false)
  }
  function handleOpenCart() {
    if (!user) {
      alert("Debes iniciar sesión para ver tu carrito")
      return
    }
    setShowCart(true)
  }
  function handleCloseCart() {
    setShowCart(false)
  }
  // El manejo de logout se realiza en Header a través del store

  // Esta función se usa en HomePage para acciones extras (mensaje, cerrar modal)
  function handleUpdateUser(updatedUser, purchaseSuccess = false) {
    if (purchaseSuccess) {
      setSuccessMessage("¡Compra realizada con éxito!")
      setShowCart(false)
    }
  }

  return (
    <div className="bg-gray-100 flex flex-col">
      {successMessage && (
        <div className="bg-green-500 text-white p-3 flex justify-between items-center">
          <span>{successMessage}</span>
          <button
            onClick={() => setSuccessMessage("")}
            className="bg-white text-green-700 px-2 py-1 rounded ml-4"
          >
            Cerrar
          </button>
        </div>
      )}

      <Header
        postsData={cursos}
        onOpenCart={handleOpenCart}
        onOpenLogin={handleOpenLogin}
      />

      {/* Renderizamos Hero solo si showHero es true */}
      {showHero && <Hero />}

      {/* Renderizamos LoginDialog solo cuando showLogin es true */}
      {showLogin && (
        <LoginDialog
          onClose={handleCloseLogin}
          usuarios={usuarios}
        />
      )}

      {showCart && user && (
        <CartDialog
          user={user}
          onClose={handleCloseCart}
          onUpdateUser={handleUpdateUser}
          cursos={cursos}
        />
      )}
    </div>
  )
}

export default function CartIcon({ cartItems }) {
  return (
    <li className="relative flex items-center">
      <a href="#carrito" className="relative block">
        <img
          src="/img/cart.png"
          alt="Cart"
          className="h-8 w-auto transition-transform duration-300 hover:scale-110"
        />
        
        {/* Contador de productos (solo aparece si hay items) */}
        {cartItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
            {cartItems}
          </span>
        )}
      </a>
    </li>
  );
}
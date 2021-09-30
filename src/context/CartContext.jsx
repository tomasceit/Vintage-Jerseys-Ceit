import * as React from "react";

const CartContext = React.createContext([]);

CartContext.displayName = "CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const addItem = (item, qty) => {
    const isIn = isInCart(item.id);
    if (isIn) {
      let itemIndex = cart.findIndex((prod) => prod.itemId === item.id);
      let newCartArray = cart;
      newCartArray[itemIndex].quantity += qty;
      setCart(newCartArray)
      return
    } else {
      let newItem = { itemId: item.id, item: item, quantity: qty };
      setCart((prevState) => [...prevState, newItem])
      return
    }
  };

  const removeItem = (id) => {
    let isIn = isInCart(id);
    if (isIn) {
      let newCartArray = cart.filter((item) => item.itemId !== id);
      setCart(newCartArray);
    } else {
        console.error('El producto que estas intentado remover no se encuentra en el carrito')
    }
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    const found = cart.find((prod) => prod.item.id === id);
    const isIn = found === undefined ? false : true;
    return isIn;
  };

  const getQuantity = () => {
    let qty = 0;
    cart.forEach((product) => {
      qty += product.quantity;
    })
    return qty
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      let subtotal = Number(product.quantity)*Number(product.item.price)
      total += subtotal;
    })
    return total
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, getQuantity, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = React.useContext(CartContext);
  return context;
};

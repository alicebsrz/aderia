import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext.jsx';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    const fetchCart = async () => {
      if (userInfo) {
        try {
    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/cart`, config);
          setCartItems(data);
        } catch (error) {
          console.error('Failed to fetch cart:', error);
          setCartItems([]);
        }
      } else {
        setCartItems([]);
      }
    };
    fetchCart();
  }, [userInfo]); // Busca o carrinho sempre que o usuário mudar (login/logout)

  const addToCart = async (productId, qty, variant = null) => {
    if (!userInfo) {
      alert('Please log in to add items to your cart.');
      return;
    }
    try {
  const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
  const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/cart`, { productId, qty, variant }, config);
      setCartItems(data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (productId, variant = null) => {
    if (!userInfo) {
      alert('Please log in to remove items from your cart.');
      return;
    }
    try {
      const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
  const url = variant ? `${import.meta.env.VITE_API_URL}/api/cart/${productId}?variant=${encodeURIComponent(variant)}` : `${import.meta.env.VITE_API_URL}/api/cart/${productId}`;
  const { data } = await axios.delete(url, config);
      setCartItems(data);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
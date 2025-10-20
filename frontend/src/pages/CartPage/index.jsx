import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext.jsx';
import { FiTrash2 } from 'react-icons/fi';
import {
  CartPageWrapper, Title, CartLayout, ItemsContainer, CartItem, ProductImage,
  ItemDetails, ProductName, ProductPrice, ProductVariant, ItemActions,
  QuantityControls, QuantityButton, QuantityInput, RemoveButton,
  OrderSummary, SummaryTitle, SummaryRow, TotalRow, CheckoutButton, EmptyCartMessage
} from './styles';

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const subtotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
  const shippingFee = subtotal > 100 ? 0 : 15; // Frete grátis acima de $100
  const total = subtotal + shippingFee;

  const checkoutHandler = () => {
    alert('Thank you for your purchase! (This is a fictional checkout)');
    // No futuro, aqui você limparia o carrinho e redirecionaria o usuário
  };

  return (
    <CartPageWrapper>
      <Title>Shopping Cart</Title>
      {cartItems.length === 0 ? (
        <EmptyCartMessage>
          Your cart is empty. <Link to="/products">Go Shopping</Link>
        </EmptyCartMessage>
      ) : (
        <CartLayout>
          <ItemsContainer>
            {cartItems.map((item) => {
              // item.product should be populated (Product doc) so we can access product.id (numeric)
              const productDoc = item.product && item.product.id ? item.product : { id: item.product };
              const key = `${productDoc.id}-${item.variant || 'default'}`;
              return (
                <CartItem key={key}>
                  <ProductImage src={item.image} alt={item.name} />
                  <ItemDetails>
                    <ProductName>{item.name}</ProductName>
                    {item.variant && <ProductVariant>Variant: {item.variant}</ProductVariant>}
                    <ProductPrice>${item.price.toFixed(2)}</ProductPrice>
                    <ItemActions>
                      <QuantityControls>
                        <QuantityButton onClick={() => addToCart(productDoc.id, Math.max(1, item.qty - 1), item.variant)}>-</QuantityButton>
                        <QuantityInput
                          type="number"
                          value={item.qty}
                          onChange={(e) => addToCart(productDoc.id, Math.max(1, Number(e.target.value)), item.variant)}
                          min="1"
                        />
                        <QuantityButton onClick={() => addToCart(productDoc.id, item.qty + 1, item.variant)}>+</QuantityButton>
                      </QuantityControls>
                      <RemoveButton onClick={() => removeFromCart(productDoc.id, item.variant)}>
                        <FiTrash2 />
                      </RemoveButton>
                    </ItemActions>
                  </ItemDetails>
                </CartItem>
              );
            })}
          </ItemsContainer>

          <OrderSummary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryRow>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </SummaryRow>
            <SummaryRow>
              <span>Shipping Fee</span>
              <span>${shippingFee.toFixed(2)}</span>
            </SummaryRow>
            <TotalRow>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </TotalRow>
            <CheckoutButton onClick={checkoutHandler}>
              Proceed to Checkout
            </CheckoutButton>
          </OrderSummary>
        </CartLayout>
      )}
    </CartPageWrapper>
  );
};

export default CartPage;
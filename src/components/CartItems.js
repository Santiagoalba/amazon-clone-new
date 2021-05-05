import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

function CartItems({ cartItems }) {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        {cartItems.map((item) => (
          <CartItem id={item.id} product={item.product} />
        ))}
      </ItemsContainer>
    </Container>
  );
}

export default CartItems;

const Container = styled.div`
  height: 300px;
  flex: 0.8;
  margin-right: 18px;
  background-color: white;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const ItemsContainer = styled.div``;

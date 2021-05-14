import React from "react";
import styled from "styled-components";
import { db } from "../firebase";
function CartItem({ id, product }) {
  let options = [];

  for (let i = 1; i <= 20; i++) {
    options.push(<option value={i}> Qty: {i}</option>);
  }

  const changeQuantity = (newQuantity) => {
    const item = db.collection("cartItems").doc(id);
    item.update({
      quantity: newQuantity,
    });
  };

  return (
    <Container>
      <CartItemImage>
        <img src={product.image} alt="ipad" />
      </CartItemImage>
      <CartItemInfo>
        <CartItemInfoTop>
          <h2>{product.name}</h2>
        </CartItemInfoTop>
        <CartItemInfoBottom>
          <CartItemQuantity>
            <select
              onChange={(event) => changeQuantity(event.target.value)}
              value={product.quantity}
            >
              {options}
            </select>
          </CartItemQuantity>
          <CartItemDelete>Delete</CartItemDelete>
        </CartItemInfoBottom>
      </CartItemInfo>
      <CartItemPrice>{product.price}</CartItemPrice>
    </Container>
  );
}

export default CartItem;

const Container = styled.div`
  padding: 12px;
  border-bottom: 1px lightgray solid;
  display: flex;
`;

const CartItemImage = styled.div`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 16px;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const CartItemInfo = styled.div`
  margin-right: 10px;
  margin-left: 16px;
  flex-grow: 1;
`;

const CartItemInfoTop = styled.div`
  font-size: 10px;
  color: #007185;
`;

const CartItemInfoBottom = styled.div`
  display: flex;
  margin-top: 18px;
`;

const CartItemQuantity = styled.div`
  select {
    border-radius: 7px;
    background-color: #f0f2f2;
    padding: 8px;
  }
`;

const CartItemDelete = styled.div`
  margin-left: 16px;
  cursor: pointer;
  color: #007185;
`;

const CartItemPrice = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-left: 16px;
`;

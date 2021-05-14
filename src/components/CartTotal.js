import React from "react";
import styled from "styled-components";
import { db } from "../firebase";

function CartTotal() {
  const getQuantity = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(doc.data().quantity);
      });
    });
  };

  getQuantity();

  return <Container>Cart Total({1} Items)</Container>;
}

export default CartTotal;

const Container = styled.div`
  height: 200px;
  flex: 0.2;
  background-color: white;
`;

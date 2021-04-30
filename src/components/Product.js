import React from "react";
import styled from "styled-components";
function Product() {
  return (
    <Container>
      <Title>Producto</Title>
      <Price>$1799</Price>
      <Rating>⭐⭐⭐⭐⭐</Rating>
      <Image
        alt=""
        src="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SX342_.jpg"
      />
      <AddToCartButton>Button</AddToCartButton>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  max-height: 400px;
  flex: 1;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span``;
const Price = styled.span`
  font-weight: 800;
  margin-top: ;
`;
const Rating = styled.div``;
const Image = styled.img`
  object-fit: contain;
  max-height: 200px;
  margin-top: 11px;
`;
const AddToCartButton = styled.button`
  width: 100px;
  background-color: #f0c14b;
  border-radius: 2px;
  border: 2px solid #a88734;
  margin-top 7px;
`;

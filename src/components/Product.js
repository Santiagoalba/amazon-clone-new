import React from "react";
import styled from "styled-components";
import { db } from "../firebase";

function Product({ price, name, rating, image, id }) {
  const addToCart = () => {
    console.log(id, "idddddd");
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        console.log(doc.data());
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("cartItems").doc(id).set({
          price,
          name,
          image,
          quantity: 1,
        });
      }
    });
  };

  return (
    <Container>
      <Title>{name}</Title>
      <Price>{price}</Price>
      <Rating>
        {Array(rating)
          .fill()
          .map((rating) => (
            <p>⭐</p>
          ))}
      </Rating>
      <Image alt="" src={image} />
      <AddToCartButton onClick={addToCart}>Button</AddToCartButton>
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
const Rating = styled.div`
  display: flex;
`;

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
  cursor: pointer;
`;

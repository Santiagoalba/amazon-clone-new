import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import { db } from "../firebase";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = [];
      tempProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setProducts(tempProducts);
    });
  }, []);

  return (
    <Container>
      <Banner></Banner>
      <Content>
        {products.map((prod) => (
          <Product
            name={prod.product.name}
            price={prod.product.price}
            image={prod.product.image}
            rating={prod.product.rating}
            id={prod.id}
          />
        ))}
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;
const Banner = styled.div`
  background-image: url("https://i.imgur.com/SYHeuYM.jpg");
  min-height: 600px;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Content = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -350px;
  display: flex;
  max-width: inherit;
`;

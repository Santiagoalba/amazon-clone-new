import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Counter() {
  const [number, setNumber] = useState(0);

  const [resourceType, setResourceType] = useState("posts");

  const [items, setItems] = useState([]);

  const substract = () => {
    setNumber(number - 1);
  };
  function sum() {
    setNumber(number + 1);
  }

  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data)
      });
      
  }, [resourceType]);

  return (
    <div>
      <button onClick={substract}>-</button>
      <span>{number}</span>
      <button onClick={sum}>+</button>
      <button onClick={() => setResourceType("Posts")}>Posts</button>
      <button onClick={() => setResourceType("Users")}>Users</button>
      <button onClick={() => setResourceType("Comments")}>Comments</button>
      <ResourceType>{resourceType}</ResourceType>
      <Items>
        {items.map((item) => {
          return <Post>{JSON.stringify(item)}</Post>;
        })}
      </Items>
    </div>
  );
}

export default Counter;

const ResourceType = styled.span`
  margin-left: 200px;
  font-size: 30px;
  color: black;
`;

const Items = styled.span`
  display: flex;
  flex-direction: column;
`;
const Post = styled.span`
  margin: 10px 0px;
`;

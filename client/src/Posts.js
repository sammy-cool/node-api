import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  border-radius: 10px;
  flex-wrap: wrap;
  margin: 71px 5px;
  min-width: 300px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: relative;
  transition: transform 450ms;
  &:hover {
    box-shadow: 0 0px 20px rgba(116, 141, 255);
    transform: scale(1.1);
    overflow: hidden;
    z-index: 1;
  }
`;

const Name = styled.h1`
  //   margin-top: 14rem;
  font-size: 23px;
  color: #2a2a50;
`;

const Info = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Description = styled.p`
  color: gray;
  font-weight: 500;
  font-size: 19px;
`;

export default function Card({ post }) {
  return (
    <Container>
      <Info>
        title:
        <Name style={{ textAlign: "center" }}>{post.title}</Name>
        body:
        <Description style={{ textAlign: "center" }}>{post.body}</Description>
      </Info>
    </Container>
  );
}

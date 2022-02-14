import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Posts";
import styled from "styled-components";

const Container = styled.div`
  //   padding: 30px;
  margin: 0rem 9rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getdata")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <>
      <b style={{ color: "#ddd", fontSize: 32 }}>Posts</b>
      <Container>
        {posts.map((post) => (
          <Card post={post} key={post.id} />
        ))}
      </Container>
    </>
  );
}

export default Home;

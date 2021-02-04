import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Blog from './components/Blog';

const App = () => {

const [blogs, setBlogs] = useState([]) 

useEffect(() => {
const fetchData = async () => {
const response = await fetch('http://localhost:5000/blogs', {
  method: 'GET',
   });

  const data = await response.json();
  setBlogs(data);
  console.log(data);
};

fetchData();

}, []);









  return (
    <Container>
      <Navbar/>
      <h1>My Blog</h1>
      <BlogContainer>
      {blogs.map((blogs, index) => {
        return <Blog blogs={blogs}/>;
      })}
      </BlogContainer>
    </Container>
  );
};

const Container = styled.div`

height: 100vh;
width: 100vw;
background-color: lightsalmon;
display: flex;
flex-direction: column;
align-items: center;

`;

const BlogContainer = styled.div`
margin-left: 10px;
width: 100vw;
display:flex;
flex-wrap: wrap;


`;

export default App;

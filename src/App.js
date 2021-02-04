import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import {fetchBlogs, fetchUsers} from './utils';
import Form from './components/Form';

const App = () => {

const [blogs, setBlogs] = useState([]);
const [users, setUsers] = useState([]);
const [erinsPosts, setErinsPosts] = useState([])
const [userId, setUserId] = useState('')
const [user, setUser] = useState('');
const [title, setTitle] = useState('');
const [content, setContent] = useState('');

useEffect(() => {
fetchBlogs(setBlogs);
fetchUsers(setUsers);
}, []);

const getUsersBlogs = async (index) => {
const response = await fetch(`http://localhost:5000/blogs/${users[index]._id}`)
 const data = response.json();
 console.log(data);
 setBlogs(data);
 setUsers(users[index]);
};

const addBlog = async (event) => {

event.preventDefault();


const response = await fetch(`http://localhost:5000/blogs/${user._id}`, {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({
    title: title,
    content: content,
    author: user._id,
  }),
});

const data = await response.json()
let temp = [...blogs];
temp.push(data);
setBlogs(temp);

};



// useEffect (() => {
//   const getBlogsByUser = async () => {
//     const response = await fetch(`http://localhost:5000/blogs/${users[1]._id}`)
//     const data = await response.json();
//     setErinsPosts(data);
//     setUserId(users[1]._id);
//   };

//   getBlogsByUser();
// }, []);

return (
    <Container>
      <Navbar users={users} getUsersBlogs={getUsersBlogs}/>
      <h1>{!user && "Choose a user"}</h1>
      <BlogContainer>
      {erinsPosts.map((blogs, index) => {
        return <Blog blogs={blogs} user={users[1]}/>;
      })}
      </BlogContainer>
{user && <Form setTitle={setTitle} setContent={setContent}/>}  
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

import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

function Blog({blogs, user}) {
    return (
        <Container>
        <h1>{blogs.title}</h1>
        <p>{blogs.post}</p>
        <p>{moment.utc(blogs.createdAt).fromNow()}</p>
        <p>Written by {user.name}</p>
        </Container>
        
            
        
    );
};

const Container = styled.div`
height: 200px;
width: 250px;
border: 1px solid black;
margin: 3px;
justify-content: center;
`;

export default Blog

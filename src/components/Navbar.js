import React from 'react';
import styled from 'styled-components';

function Navbar({users, getUsersBlogs}) {
    return (
        <Container>
            {users.map((users, index) => {
                return <h1 onClick={() => getUsersBlogs(index)}> {users.name}</h1>;
            })}
        </Container>
    );
};

const Container = styled.div`
width: 100vw;
height: 80px;
background-color: lightgreen;
display: flex;
justify-content: space-evenly;
align-items: center;
`

export default Navbar



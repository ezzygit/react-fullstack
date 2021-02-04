import React from 'react';
import styled from 'styled-components';




function Navbar() {
    return (
        <Container>
            <h1> I am the navbar</h1>
        </Container>
    );
};

const Container = styled.div`
width: 100vw;
height: 80px;
background-color: lightgreen;
display: flex;
justify-content: center;
align-items: center;
`

export default Navbar



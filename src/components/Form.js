import React from 'react';
import styled from 'styled-components'

function Form({setTitle, setContent, addBlog}) {
    return (
        <Container onSubmit={addBlog}>
            <input type="text" placeholder="Title" onChange={(event) => 
            setTitle(event.target.value)}/>
            <textarea placeholder="Content" onChange={(event) => 
            setContent(event.target.value)} />
            <button>Add Post</button>

        </Container>
    );
};

export default Form;

const Container = styled.form `
display:flex;
flex-direction: column;


`

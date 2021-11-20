import React from 'react'
import styled from 'styled-components'
import Academy from '../components/Academy';

const Container=styled.div``;

const Heading=styled.h1`
text-align:center;
margin-top:20px;
word-spacing: 3px;
font-weight: bold;
`;

const Academic = () => {
    
    return (
        <Container>
          <Heading>ACADEMIC DETAILS</Heading>
          <Academy/> 
        </Container>
    )
}

export default Academic

import React from 'react'
import styled from 'styled-components'
import Classes from '../components/Classes';
import LastFooter from '../components/LastFooter';

const Container=styled.div``;

const Heading=styled.h1`
text-align:center;
margin-top:20px;
word-spacing: 3px;
`;

const ClassPage = () => {
    return (
        <Container>
            <Heading>LISTS OF ALL CLASSES</Heading>
          <Classes/>  
          <LastFooter/>
        </Container>
    )
}

export default ClassPage

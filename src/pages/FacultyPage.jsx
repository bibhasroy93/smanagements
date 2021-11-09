import React from 'react'
import styled from 'styled-components'
import Faculty from '../components/Faculty';
import LastFooter from '../components/LastFooter';

const Container=styled.div``;

const Heading=styled.h1`
text-align:center;
margin-top:20px;
word-spacing: 3px;
`;

const FacultyPage = () => {
    return (
        <Container>
            <Heading>FACULTY DETAILS</Heading>
          <Faculty/>  
          <LastFooter/>
        </Container>
    )
}

export default FacultyPage

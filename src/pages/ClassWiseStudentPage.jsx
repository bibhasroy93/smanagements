import React from 'react'
import styled from 'styled-components';
import ClassStudentList from '../components/ClassesTable';
import LastFooter from '../components/LastFooter';

const Container=styled.div``;

const Heading=styled.h1`
text-align:center;
margin-top:20px;
word-spacing: 3px;
`;
const ClassWiseStudentPage = () => {
    return (
        <Container>
            <Heading>LISTS OF ALL STUDENTS</Heading>
          <ClassStudentList/>  
          <LastFooter/>
        </Container>
    )
}

export default ClassWiseStudentPage

import React from 'react'
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import ClassStudentList from '../components/ClassesTable';
import LastFooter from '../components/LastFooter';

const Container=styled.div``;

const Heading=styled.h1`
text-align:center;
margin-top:20px;
word-spacing: 3px;
font-weight: bold;
`;

const SubHeading=styled.h2`
text-align:center;
margin-top:10px;
word-spacing: 5px;
letter-spacing: 5px;
`;
const ClassWiseStudentPage = (props) => {
    const location = useLocation();
    return (
        <Container>
            <Heading>LISTS OF ALL STUDENTS</Heading>
            <SubHeading>{location.state}</SubHeading>
          <ClassStudentList/>  
          <LastFooter/>
        </Container>
    )
}

export default ClassWiseStudentPage

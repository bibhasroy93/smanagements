import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #d1cdd6;
  position: relative;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
`;
const Title = styled.h1`
  color: black;
  margin-bottom: 20px;
  font-weight: bold;
`;
const SubTitle = styled.h2`
  color: black;
  margin-bottom: 8px;
`;


const FacultyList = ({ item }) => {
    return (
      <Container>
      <Info>
      <Title>{item.name}({item.qual})</Title>
      <SubTitle>Assistant Teacher</SubTitle> 
      <SubTitle>Subject : {item.dept}</SubTitle>
      <SubTitle>{item.contact}</SubTitle>
      </Info>
    </Container>
    )
}

export default FacultyList

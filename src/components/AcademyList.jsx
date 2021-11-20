import React from "react";
import {useHistory} from 'react-router-dom'
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
  background-color: #2479da;
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
`;
const Title = styled.h1`
  color: #ffffff;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: 1px;
  padding: 10px;
  border-radius: 4px;
  width: 150px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-weight: 400;
  transform: scale(1);
  transition: all 0.2s ease;
  :hover {
    transform: scale(1.05);
  }
`;

const ClassList = ({ item }) => {
  //const history = useHistory();
  
//   const handleStudentRoute = () =>{ 
//     history.push({
//       pathname: '/classWiseStudent',
//       state:item.title, 
//     });
//   };
  return (
    <Container>
      <Info>
        <Title>{item.name}</Title>
        <Button>View Details</Button>
      </Info>
    </Container>
  );
};

export default ClassList;

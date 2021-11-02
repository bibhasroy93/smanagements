import React from "react";
import styled from "styled-components";

const Container = styled.div`
  
`;

const Wrapper = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items:center;
  justify-content: space-between;
  background-color: blueviolet;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  fill-opacity: inherit;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  :hover{
    opacity: 0.5;
  }
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuItem>Home</MenuItem>
          <MenuItem>Academy</MenuItem>
          <MenuItem>Faculty</MenuItem>
          <MenuItem>Admission</MenuItem>
          <MenuItem>Notice</MenuItem>
          <MenuItem>Result</MenuItem>
          <MenuItem>Covid</MenuItem>
        </Left>
        <Center>
          
        </Center>
        <Right>
          <MenuItem>ADMIN</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

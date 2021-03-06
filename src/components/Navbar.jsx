import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items: center;
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  transform: scale(1);
  transition: all 0.2s ease;
  :hover {
    transform: scale(1.05);
  }
`;

const Button = styled.button`
  width: 100px;
  padding: 8px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  border: 1px solid #ffffff;
  background: white;
  color: black;
  font-size: 14px;
  transform: scale(1);
  transition: all 0.2s ease;
  :hover {
    transform: scale(1.05);
  }
`;
const Navbar = () => {

  const history = useHistory();
  
  const handleAdminRoute = () =>{ 
    history.push("/admin");
  }
    const handleAcademicRoute = () =>{ 
        history.push("/academic");
      }
  const handleFacultyRoute = () =>{ 
    history.push("/faculty");
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuItem>Home</MenuItem>
          <MenuItem onClick={handleAcademicRoute}>Academic</MenuItem>
          <MenuItem onClick={handleFacultyRoute}>Faculty</MenuItem>
          <MenuItem>Admission</MenuItem>
          <MenuItem>Notice</MenuItem>
          <MenuItem>Result</MenuItem>
          <MenuItem>Covid</MenuItem>
        </Left>
        <Center></Center>
        <Right>
          <Button onClick={handleAdminRoute}>ADMIN</Button>
        
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
align-items:center;
display:flex;
`;

const Logo = styled.img`
  height: 120px;
`;

const Title=styled.h1`
font-size: 40px;
margin-left: 20px;
justify-content: space-between;
letter-spacing: 3px;
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
          <Logo src="https://i.ibb.co/74hGHGK/gradient-book-logo-with-slogan-23-2148832096.jpg"/>
          <Title>PRANAVANANDA  VIDYAMANDIR  &  GAIRIK</Title>
          
      </Wrapper>
    </Container>
  );
};

export default Header;

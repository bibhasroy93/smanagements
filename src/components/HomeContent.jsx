import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper=styled.div`
margin-top: 8px;
height:50px;
background-color:black;
`;

const InfoText=styled.h1`
color:white;
padding-left: 8px;
text-align: center;
`;

const TopPart = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const LeftText = styled.span`
  margin-left: 10px;
  word-spacing: 2px;
  line-height: 1.5em;
  text-align: justify;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const RightImage = styled.div`
  height: 200px;
  flex: 1;
`;

const Image = styled.img`
  height: 200px;
  width: 700px;
`;

const MiddlePart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const MiddleText = styled.span`
  margin-left: 10px;
  word-spacing: 2px;
  line-height: 1.5em;
  text-align: justify;
`;

const LastPart = styled.div`
  flex: 1;
  display: flex;
`;

const LeftImage = styled.div`
  height: 200px;
  flex: 1;
`;

const RightText = styled.span`
  word-spacing: 2px;
  line-height: 1.5em;
  text-align: justify;
`;

const HomeContent = () => {
  return (
    <Container>
      <Wrapper>
        <InfoText>
          Overview
        </InfoText>
      </Wrapper>
      <TopPart>
        <Left>
          <LeftText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </LeftText>
        </Left>
        <Right>
          <RightImage>
            <Image src="https://i.ibb.co/9gVXfTN/slider2.jpg" />
          </RightImage>
        </Right>
      </TopPart>
      <MiddlePart>
        <MiddleText>
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, which is the same as
          saying through shrinking from toil and pain. These cases are perfectly
          simple and easy to distinguish. In a free hour, when our power of
          choice is untrammelled and when nothing prevents our being able to do
          what we like best, every pleasure is to be welcomed and every pain
          avoided. But in certain circumstances and owing to the claims of duty
          or the obligations of business it will frequently occur that pleasures
          have to be repudiated and annoyances accepted. The wise man therefore
          always holds in these matters to this principle of selection: he
          rejects pleasures to secure other greater pleasures, or else he
          endures pains to avoid worse pains.
        </MiddleText>
      </MiddlePart>
      <LastPart>
        <Left>
          <LeftImage>
            <Image src="https://i.ibb.co/9gVXfTN/slider2.jpg" />
          </LeftImage>
        </Left>
        <Right>
          <RightText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </RightText>
        </Right>
      </LastPart>
    </Container>
  );
};

export default HomeContent;

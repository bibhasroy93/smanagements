import { CopyrightOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`

`;

const Wrapper=styled.div`
padding: 8px 16px;
  display: flex;
  text-align: center;
  align-items:center;
  justify-content: center;
  background-color: white;
  `;

const CopyrightItem=styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
color: black;
`;

const LastFooter = () => {
    return (
        <Container>
            <Wrapper>
              <CopyrightItem>
                  <CopyrightOutlined/> 2021 All Rights Reserved | Site designed & maintained by simplecoding
              </CopyrightItem>
            </Wrapper>
        </Container>
    )
}

export default LastFooter

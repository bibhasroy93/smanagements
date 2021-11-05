import React from 'react'
import styled from 'styled-components'
import {classes} from "../data";
import ClassList from "./ClassList";

const Container=styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`;



const Classes = () => {
    return (
        <Container>
          {classes.map((item)=>(
              <ClassList item={item} key={item.id} />
          ))}  
        </Container>
    )
}

export default Classes

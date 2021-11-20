import React from 'react'
import styled from 'styled-components'
import {academicDetails} from "../data";
import AcademyList from "./AcademyList";

const Container=styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`;



const Academy = () => {
    return (
        <Container>
          {academicDetails.map((item)=>(
              <AcademyList item={item} key={item.id} />
          ))}  
        </Container>
    )
}

export default Academy

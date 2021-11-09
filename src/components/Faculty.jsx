import React from 'react'
import styled from 'styled-components'
import {faculty} from "../data";
import FacultyList from "./FacultyList";

const Container=styled.div`
padding:20px;
flex-wrap:wrap;
justify-content:space-between;
`;
const Faculty = () => {
    return (
        <Container>
          {faculty.map((item)=>(
              <FacultyList item={item} key={item.id} />
          ))}  
        </Container>
    )
}

export default Faculty

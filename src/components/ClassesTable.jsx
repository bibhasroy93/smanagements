import React from 'react'
import styled from 'styled-components'
import {classDetails} from "../data";
import ClassTable from "./ClassTable";

const Container=styled.div`
padding:20px;

`;



const ClassesTable = () => {
    return (
        <Container>
          {classDetails.map((item)=>(
              <ClassTable item={item} key={item.id} />
              
          ))}  
        </Container>
    )
}

export default ClassesTable

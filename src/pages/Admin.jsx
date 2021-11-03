import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
width:100vw;
height:100vh;
background:linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
),
url("https://i.ibb.co/0hB4pp9/logscr.png")
center;
display:flex;
align-items:center;
justify-content:center;
`;

const Wrapper=styled.div`
width:25%;
padding:20px;
background-color:white;
border-radius: 4px;
`;

const Title=styled.h1`
font-size:24px;
font-weight:300;
text-align: center;
letter-spacing: 3px;
`;

const Form=styled.form`
display:flex;
flex-direction:column;
`;

const Input=styled.input`
flex:1;
min-width:40%;
margin:10px 0;
padding:10px;
`;


const Button=styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;
border-radius: 4px;
`;

const Note=styled.div`
margin:5px 0px;
font-size:14px;
color: red;
`;

const Admin = () => {
    return (
        <Container>
            <Wrapper>
                <Title>ADMIN</Title>
                <Form>
                    <Input placeholder="Enter username"/>
                    <Input placeholder="Enter password" type="password"/>
                    <Button>LOGIN</Button>
                    <Note>Only Admin can login</Note>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Admin

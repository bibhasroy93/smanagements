import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, WhatsApp } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
display:flex;

`;

const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;

`;

const Logo=styled.h1``;

const Desc=styled.p`
margin:20px 0px;
`;

const SocialContainer=styled.div`
display:flex;
`;

const SocialIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`;

const Center=styled.div`
flex:1;
padding:20px;

`;

const Title=styled.h3`
margin-bottom:30px;
`;

const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;

const ListItem=styled.li`
width:50%;
margin-bottom:10px;
`;

const Right=styled.div`
flex:1;
padding:20px;

`;

const ContactItem=styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`;




const Footer = () => {
    return (
        <Container>
           <Left>
               <Logo>About Us</Logo>
               <Desc>There are many variations of passages of Lorem Ipsum available,but
                   the majority have suffered alteration in some form, by injected
                   humour, or randomised words which don't look even slightly believable.
               </Desc>
               <SocialContainer>
                   <SocialIcon color="3B5999">
                       <Facebook/>
                   </SocialIcon>
                   <SocialIcon color="E4405F">
                       <Instagram/>
                   </SocialIcon>
                   <SocialIcon color="55ACEE">
                       <Pinterest/>
                   </SocialIcon>
                   <SocialIcon color="E60023">
                       <Twitter/>
                   </SocialIcon>
                   <SocialIcon color="128C7E">
                       <WhatsApp/>
                   </SocialIcon>
               </SocialContainer>
               </Left> 
           <Center>
               <Title>Useful Links</Title>
               <List>
               <ListItem>Home</ListItem> 
               <ListItem>Faculty</ListItem> 
               <ListItem>Admission</ListItem> 
               <ListItem>Routine</ListItem> 
               <ListItem>Result</ListItem> 
               <ListItem>Contact Us</ListItem> 
               <ListItem>Covid Norms</ListItem>    
               <ListItem>Labs</ListItem> 
               <ListItem>Extra Curricular</ListItem> 
               <ListItem>Notice</ListItem> 
               </List>
           </Center>
           <Right>
               <Title>Contact</Title>
               <ContactItem><Room style={{marginRight:"10px"}}/>2/52, Shanti Path, C-Zone, Durgapur, West Bengal, Burdwan, PIN : 713205</ContactItem>
               <ContactItem><Phone style={{marginRight:"10px"}}/>+91 9474111878, +91 7602588518</ContactItem>
               <ContactItem><MailOutline style={{marginRight:"10px"}}/>support@pvm.com</ContactItem>
               
           </Right>
          
        </Container>
    )
}

export default Footer

import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 20vh;
   
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background-color:  ${({theme})=>theme.bgLighter};
   flex-direction: column;
   border: 1px solid grey;
   width: 300px;
   padding: 10px 20px;
   gap: 20px;
   border-radius: 10px;
   box-shadow: 1px 12px 21px -6px rgba(0,0,0,0.75);
-webkit-box-shadow: 1px 12px 21px -6px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 12px 21px -6px rgba(0,0,0,0.75);
`
const Title = styled.h3`
    color:  ${({theme})=>theme.text}
`
const Sub = styled.div`
color:  ${({theme})=>theme.text}
`
const Input = styled.input`
  padding: 10px 10px;
  border: 1px solid grey;
  background-color:  ${({theme})=>theme.bg};
  width: 250px;
  color:  ${({theme})=>theme.text};

`
const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #3f3f79;
  border: 1px solid #3f3f79;
  padding: 5px 20px;
  background-color: transparent;
  font-weight: 500;
  gap: 5px;

  


  :hover{
    background-color: grey;
   }
 

`
export default function Signin() {
  return (
    <Container>
        <Wrapper>
           <Title>SignIn</Title>
           <Sub>Signin to Continue</Sub>
           <Input placeholder='username' ></Input>
           <Input type="password" placeholder='password' ></Input>
           <Button>Sign in</Button>
           <h4 style={{color:"grey"}} >or</h4>
           <Input placeholder='username' ></Input>
           <Input placeholder='email' ></Input>
           <Input type="password" placeholder='password' ></Input>
           <Button>Sign Up</Button>
        </Wrapper>
    </Container>
  )
}

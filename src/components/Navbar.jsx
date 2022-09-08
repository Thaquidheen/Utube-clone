import React from 'react'
import styled from 'styled-components'
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: ${({theme})=>theme.bgLighter};
  height: 50px;

  position: sticky;
  top: 0;



`
const Wrapper = styled.div`
display: flex;
align-items: center;
height: 100%;
justify-content: flex-end;
  position: relative;



`
const Search = styled.div`
 width: 30%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 position: absolute;
 left:0;
 right: 0;
 margin: auto;
 padding: 1px;
 border: 1px solid grey ;

`
const Input = styled.input`
 border: none;
 background-color: ${({theme})=>theme.bgLighter} ;
 width: 100%;
 height: 100%;
  

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




export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search' >
   
          </Input>
   
          <SearchOutlinedIcon style={{cursor:"pointer",backgroundColor:"grey", width:"50px"}} />

        
        </Search>
        <Link to="signin" style={{textDecoration:"none"}}>

     
        <Button>
        <PermContactCalendarOutlinedIcon/>
          SIGN IN
        </Button>
        </Link>
      </Wrapper>
    </Container>
  )
}

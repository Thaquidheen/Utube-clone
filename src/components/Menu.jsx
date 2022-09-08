import React from 'react'
import styled from 'styled-components'
import utube_logo from '../images/free-youtube-logo-icon-2431-thumb.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Link } from 'react-router-dom'


const Container = styled.div`
    flex: 1;
    background-color: ${({theme})=>theme.bgLighter};
    height: 100vh;
    color: ${({theme})=>theme.text};
    position: sticky;
    top: 0;
    
`
const Wrapper= styled.div`
  padding: 18px 20px;
`
const Logo= styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
  
`
const Img = styled.img`
    height: 25px;
    object-fit: cover;
`
const Items = styled.div`
   display: flex;
   align-items: center;
   gap:  20px;
   cursor: pointer;

   
  
   padding:  5px;
   :hover{
    background-color: grey;
   }
   
 
`
const Line = styled.hr`
 border: 0.5px solid ${({theme})=>theme.soft};
 margin: 15px 0px;
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
 margin-top: 5px;
 margin-left: 5px;

  :hover{
    background-color: grey;
   }
 

`
const Title = styled.h4`
  padding: 10px;
`


export default function Menu({darkMode,setDarkMode}) {
  return (
    <Container>
       <Wrapper>
          <Link to="/"  style={{textDecoration:"none",color:"inherit"}}>
          <Logo>
              <Img src={utube_logo}/>
              YouTube
          </Logo>
          </Link>
      
        <Items>
         <HomeIcon />
          Home
        </Items>
        <Items>
         <ExploreOutlinedIcon  />
          Explore
        </Items>
        <Items>
         <SubscriptionsOutlinedIcon/>
          Subscription
        </Items>
        <Line/>

        <Items>
         <VideoLibraryOutlinedIcon/>
          Library
        </Items>
       <Items>
        <HistoryOutlinedIcon/>
        History
       </Items>
       <Line/>
       <p style={{padding:"10px"}} >sign into Like Videos,and Comments</p>
       <Link to="signin" style={{textDecoration:"none"}} >
      
       <Button>
        <PermContactCalendarOutlinedIcon/>
          SIGN IN
          </Button>
          </Link>
       <Line/>
       <Title>
        EXPLORE
       </Title>
       <Items>
        <LibraryMusicOutlinedIcon/>
        Music
       </Items>
       <Items>
        <SportsBasketballOutlinedIcon/>
        Gaming
       </Items>
       <Items onClick={()=>setDarkMode(!darkMode)} >
       <LightModeOutlinedIcon/>
       LightMode
       </Items>
     
       </Wrapper>
    </Container>
  )
}

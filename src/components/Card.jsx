import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
  width: 360px;
  margin-bottom: ${(props)=>props.type === 'sm' ? "20px":"50px"};
  display:${(props)=>props.type === 'sm' && "flex"};
  gap:${(props)=>props.type === 'sm' && "10px"};

`
const Image = styled.img`
  height: ${(props)=>props.type === 'sm' ? "100px":"202px"};
  width: ${(props)=>props.type === 'sm' ? "150px":"100%"};
  background-color: grey;
  cursor: pointer;

`
const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

`
const ChanelImage = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
cursor: pointer;
margin-top: -30px;
display:${(props)=>props.type === 'sm' && "none"} ;


`
const VideoDetails = styled.div`
 
 margin: 8px 0px;
  margin-top: ${(props)=>props.type === 'sm' && "-20px"};;
   
`
const Title = styled.h3`
  color: ${({theme})=>theme.text};
 font-weight: bold;
 font-size: ${(props)=>props.type === 'sm' && "15px"};



` 
const ChannelName = styled.h6`
  color: grey;
  font-weight: 900;
  margin-top: 5px;
  font-size: 15px;
 font-weight: bolder;
 margin: 2px 0px
`
const Views= styled.div`
  color: grey;
  margin-top: 5px;
 display: flex;
 align-items: center;
 gap: 5px;
 font-size: 15px;
 font-weight: bolder;
 font-size: ${(props)=>props.type === 'sm' && "10px"};

`
const View= styled.p`
  
`
const Point = styled.div`
  margin-top: -7  px;
  font-weight: bold;
`
const Days = styled.p`
font-size: ${(props)=>props.type === 'sm' && "10px"};
`





export default function Card({type}) {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}} >

    <Container type={type} >
      <Image type={type} src='https://i.ytimg.com/vi/ohtcXbBhqEY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYgIXgNS8Ei9pGgqUyVgS-OXiTtw'/>
      <Details>
        <ChanelImage type={type} src='https://yt3.ggpht.com/ytc/AMLnZu_R_vln0aC7prd_86RTNw9TC1XoXgR43t2RSNKe=s68-c-k-c0x00ffffff-no-rj' />
        <VideoDetails type={type} >
           <Title type={type} >Palthu Janwar Official trailer</Title>
           <ChannelName>Rocky</ChannelName>
           <Views>
             <View type={type} >2.1M Views</View>
             <Point>.</Point>
             <Days type={type} >2 days ago </Days>
           </Views>
        </VideoDetails>
      </Details>
    </Container>
    </Link>
  
  )
}

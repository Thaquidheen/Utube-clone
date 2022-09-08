import React from 'react'
import styled from 'styled-components'

const Container =styled.div`
    margin-top: 20px;
    margin: 40px 0px;
    display: flex;
    gap:10px;
`
const Avatar = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
`
const Name = styled.span`
    
`
const Person = styled.h4`
    color: ${({theme})=>theme.text} ;
    font-weight: 400;
`
const Percomment = styled.h5`
   color: ${({theme})=>theme.text};
   font-weight: 300;
   margin-top: 10px;
`

export default function Comment() {
  return (
    <Container>
       <Avatar src='https://yt3.ggpht.com/yti/AJo0G0nh0SQ8URbkARaU81U4Jd1OYwdiAbi-u3IN8KOQnA=s48-c-k-c0x00ffffff-no-rj' ></Avatar>
       <Name>
         <Person>Thaquidheen(1 Month ago)</Person>
         <Percomment>hello this is good movie</Percomment>
       </Name>
    </Container>
  )
}

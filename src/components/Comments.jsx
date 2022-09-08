import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div`
    margin-top: 20px;
`
const NewComment = styled.div`
    display: flex;
    gap: 10px;
`
const Avatar = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
`
const Input = styled.input`
     border: none;
    border-bottom:2px solid grey;
    background-color: ${({theme})=>theme.bg};
    color:${({theme})=>theme.text};
    outline: none;
    width: 100%;
`

export default function Comments() {
  return (
    <Container>
     <NewComment>
        <Avatar src='https://yt3.ggpht.com/yti/AJo0G0nh0SQ8URbkARaU81U4Jd1OYwdiAbi-u3IN8KOQnA=s48-c-k-c0x00ffffff-no-rj' ></Avatar>
        <Input  placeholder='Add a Comment' />
     </NewComment>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     

  
    </Container>
  )
}

import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Comments from '../components/Comments';
import Card from '../components/Card';


const Container = styled.div`
  

`
const Wrapper = styled.div`
   display: flex;
   gap: 20px;

`
const Content = styled.div`

  flex: 5;
`
const Videowrapper = styled.div`


`
const Title = styled.h1`
  margin-top: 10px;
  color:${({theme})=>theme.text};
`



const Details = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 10px;

`
const Details1 = styled.div`

  display: flex;
  gap: 5px;

`
const Details2 = styled.div`
     display: flex;
     gap: 20px;
`
const View= styled.p`
  color: grey;
`
const Point = styled.p`
  margin-top: -4px;
  font-weight: bold;
  color: grey;
`
const Days = styled.p`
  color: grey;
`
const Like = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
   color:${({theme})=>theme.text};

`
const Dislike = styled.div`
  display: flex;
  color:${({theme})=>theme.text};

  align-items: center;
  gap: 5px;
`
const Share = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color:${({theme})=>theme.text};
`
const Clip = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color:${({theme})=>theme.text};
`
const Save = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color:${({theme})=>theme.text};
`
const Report = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color:${({theme})=>theme.text};
`



const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`
const ChanneDetails = styled.div`
  display: flex;
  gap: 10px;
`

const Channelimg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
`
const Channeltitle = styled.div`
    
`
const ChannelHeading = styled.h4`
  color: ${({theme})=>theme.text};
  
`
const Views = styled.p`
  color:grey ;
  margin-top: 5px;
  
  
`

const Sub= styled.div`
  justify-items: flex-end;
`

const Button  = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px 10px;
  background-color: red;
  color: #b3aaaa;
  font-size: medium;
`


const Videodetails = styled.h5`
  margin-left: 60px;
  color:${({theme})=>theme.text} ;
`














const Recommende = styled.div`

  flex: 2;
`

const Line = styled.hr`
 border: 0.5px solid ${({theme})=>theme.soft};
 margin: 15px 0px;
`

export default function Video() {
  return (
    <Container>
       <Wrapper>
         <Content>
         <Videowrapper>
     
          <iframe width="1100" height="640" src="https://www.youtube.com/embed/ohtcXbBhqEY" title="Palthu Janwar Official Trailer | Basil Joseph | Johny Antony | Indrans | Sangeeth P Rajan | SEPT 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


         </Videowrapper>
         <Title>Palthu Janwer Official Trailer</Title>
         <Details>
            <Details1>
              <View>1,016,328 views</View>
              <Point>.</Point>
              <Days>Premiered Aug 27, 2022</Days>
            </Details1>
            <Details2>
              <Like>
              <ThumbUpOutlinedIcon/>
              <p>36k </p>
              </Like>
              <Dislike>
                <ThumbDownAltOutlinedIcon/>
                <p>Dislike</p>
              </Dislike>
              <Share>
                <ReplyOutlinedIcon/>
                <p>Share</p>
              </Share>
              <Clip>
                <ContentCutOutlinedIcon/>
                <p>Clip</p>
              </Clip>
              <Save>
                <MenuOutlinedIcon/>
                <p>Save</p>
              </Save>
              <Report>
                <MoreHorizOutlinedIcon/>
                
              </Report>
            </Details2>
         </Details>
         <Line/>
          <Channel>

            <ChanneDetails>
            <Channelimg src='https://yt3.ggpht.com/Zd5yNhb7zKBmsO8ItaY6W88KldLeWHxgg_Kiz--tA2XyBb2gagm-dHmlCO8orRN4a-zKf-QdKbQ=s68-c-k-c0x00ffffff-no-rj' ></Channelimg>
            <Channeltitle> 
              <ChannelHeading>Thaqu Channel</ChannelHeading>
              <Views>133K subscribers</Views>
            </Channeltitle>
            
            </ChanneDetails>
           
          
       
      
          <Sub>
            <Button>SUBSCRIBE</Button>
          </Sub>
          </Channel>
          <Videodetails>
          Video uploading app design using React and Styled Components.
          </Videodetails>
          <Line/>
       <Comments>

         
       </Comments>


         </Content>
          
         <Recommende>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
         
         </Recommende>
       </Wrapper>
    </Container>
  )
}

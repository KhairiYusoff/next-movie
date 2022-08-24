
import Image from 'next/image'
import styled from 'styled-components'
import { MdOutlineAccessTime } from "react-icons/md";
import { GrView } from "react-icons/gr";

const Container = styled.div`
background-color: #333333;
margin: 0 auto;
`

const Wrapper = styled.div`
padding: 5%;
`
const Title = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const Release = styled.h1`
font-weight: 500;
letter-spacing: 2px;
`

const ViewMore = styled.h3`
color: #FED530;
`

const MainMovie = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`

const MainLeft = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 560px;
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
margin: 10px;
`

const MainRight = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 560px;
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
margin: 10px;
`

const OthersMovie = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`

const Left = styled.div`
flex: 1;
height: 560px;
display: flex;
flex-direction: column;
justify-content: space-between;
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
margin: 10px;
`

const Center = styled.div`
flex: 1;
height: 560px;
display: flex;
flex-direction: column;
justify-content: space-between;
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
margin: 10px;
`
const Right = styled.div`
flex: 1;
height: 560px;
display: flex;
flex-direction: column;
justify-content: space-between;
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
margin: 10px;
`

const Type = styled.p`
margin-left: 24px;
padding: 5px;
width: 80px;
text-align: center;
border-radius: 16px;
border: none;
background-color: #FED530;
color: black;
`

const Stats = styled.div`
display: flex;
align-items: center;
`

const TimeContainer = styled.div`
display: flex;
`

const Time = styled.div`
margin-left:5px;
`

const ViewsContainer = styled.div`
display: flex;
padding: 10px;
`

const Views = styled.div`
margin-left:5px;
`

const MovieName = styled.h1`
letter-spacing: 2px;
font-weight: 700;
`
const Bottom = styled.div`
margin-left: 24px;
`




const Movie = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    <Release>New Releases</Release>
                    <ViewMore>View More</ViewMore>
                </Title>
                <MainMovie>
                    <MainLeft>
                        <Type>Fantasy</Type>
                        <Bottom>
                            <Stats>
                                <TimeContainer>
                                    <MdOutlineAccessTime />
                                    <Time>1hr24mins</Time>
                                </TimeContainer>
                                <ViewsContainer>
                                    <GrView color="white" />
                                    <Views>21.3k views</Views>
                                </ViewsContainer>
                            </Stats>
                            <MovieName>The Ring's Lord</MovieName>
                        </Bottom>
                    </MainLeft>
                    <MainRight>
                        <Type>Fantasy</Type>
                        <Bottom>
                            <Stats>
                                <TimeContainer>
                                    <MdOutlineAccessTime />
                                    <Time>1hr24mins</Time>
                                </TimeContainer>
                                <ViewsContainer>
                                    <GrView color="white" />
                                    <Views>21.3k views</Views>
                                </ViewsContainer>
                            </Stats>
                            <MovieName>Interspace</MovieName>
                        </Bottom>
                    </MainRight>
                </MainMovie>
                <OthersMovie>
                    <Left>
                        <Type>Fantasy</Type>
                        <Bottom>
                            <Stats>
                                <TimeContainer>
                                    <MdOutlineAccessTime />
                                    <Time>1hr24mins</Time>
                                </TimeContainer>
                                <ViewsContainer>
                                    <GrView color="white" />
                                    <Views>21.3k views</Views>
                                </ViewsContainer>
                            </Stats>
                            <MovieName>Interspace</MovieName>
                        </Bottom>
                    </Left>
                    <Center>
                        <Type>Fantasy</Type>
                        <Bottom>
                            <Stats>
                                <TimeContainer>
                                    <MdOutlineAccessTime />
                                    <Time>1hr24mins</Time>
                                </TimeContainer>
                                <ViewsContainer>
                                    <GrView color="white" />
                                    <Views>21.3k views</Views>
                                </ViewsContainer>
                            </Stats>
                            <MovieName>Her & Him</MovieName>
                        </Bottom>
                    </Center>
                    <Right>
                        <Type>Fantasy</Type>
                        <Bottom>
                            <Stats>
                                <TimeContainer>
                                    <MdOutlineAccessTime />
                                    <Time>1hr24mins</Time>
                                </TimeContainer>
                                <ViewsContainer>
                                    <GrView color="white" />
                                    <Views>21.3k views</Views>
                                </ViewsContainer>
                            </Stats>
                            <MovieName>Lo Lo Land</MovieName>
                        </Bottom>
                    </Right>
                </OthersMovie>
            </Wrapper>
        </Container>
    )
}

export default Movie
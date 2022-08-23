import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'


const Container = styled.div`
background: linear-gradient(270deg, #000000 -2.92%, rgba(0, 0, 0, 0) 100%);
margin: 0 auto;
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 5%;
`

const Circle = styled.div`
flex: 4;
`

const BigCircle = styled.div`
position: relative;
width: 274px;
height: 274px;
border: solid yellow;
border-radius: 50%;
margin: 0 auto;
`

const SmallCircle = styled.div`
position: absolute;
width: 120px;
height: 120px;
background-color: #FED530;
border-radius: 50%;
top: 50%;
left: 50%;
margin: -60px 0 0 -60px;
`

const Right = styled.div`
flex: 5;
`

const Title = styled.p`
font-size: 72px;
line-height: 96px;
font-weight: 700;
width: 600px;
margin: 0;
`

const Desc = styled.p`
font-size: 16px;
line-height: 32px;
font-weight: 400;
width: 600px;
`

const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <Circle>
                    <BigCircle>
                        <SmallCircle>
                            <Image src="/..public/play.png" width="20px" height="20px" />
                        </SmallCircle>
                    </BigCircle>
                </Circle>
                <Right>
                    <Title>Find Your Movies Here!</Title>
                    <Desc>Explore our gallery full of exciting films from all around the globe
                        only for your entertainments. No hidden charges or disturbing ads.</Desc>
                </Right>
            </Wrapper>

        </Container>
    )
}

export default Hero
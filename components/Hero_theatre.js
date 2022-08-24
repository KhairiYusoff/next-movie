import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
background: #333333;
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

const ImageContainer = styled.div`
margin-left: 170px;
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
width: 502px;
color: #E6E6E6;
`

const Hero_theatre = () => {
    return (
        <Container>
            <Wrapper>
                <Circle>
                    <ImageContainer>
                        <Image src="/../public/Play Button.png" width="274" height="274" />
                    </ImageContainer>
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
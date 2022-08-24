import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { FiPlay } from "react-icons/fi";



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

const BigCircle = styled.div`
position: relative;
width: 274px;
height: 274px;
border-top: 2px solid #808080;
border-left: 4px solid #FED530;
border-right: 4px solid #FED530;
border-bottom: 4px solid #FED530;
transform: rotate(45deg);
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
letter-spacing: 2px;
`

const Desc = styled.p`
font-size: 16px;
line-height: 32px;
font-weight: 400;
width: 600px;
letter-spacing: 2px;
`

const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <Circle>
                    <BigCircle>
                        <SmallCircle>
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
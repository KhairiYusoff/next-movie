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
font-weight: 700;
font-size: 48px;
line-height: 64px;
color: #FFFFFF;
width: 600px;
height: 64px;
margin-top: 0;
`

const InputContainer = styled.div`
`

const SearchInput = styled.input`
width: 399px;
height: 54px;
font-weight: 400;
font-size: 21px;
line-height: 24px;
background: #FFFFFF;
border-radius: 40px;
margin-right: 20px;
padding: 10px;
`

const DateInput = styled.input`
width: 176px;
height: 54px;
background: #FFFFFF;
border-radius: 40px;
font-weight: 400;
font-size: 21px;
line-height: 24px;
padding: 10px;
`

const Button = styled.button`
background: #FED530;
border-radius: 27px;
width: 161px;
height: 54px;
margin-top: 30px;
border: none;
font-weight: 700;
font-size: 21px;
line-height: 24px;
color: #000000;
cursor: pointer;
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
                    <Title>Search Your Movies Here!</Title>
                    <InputContainer>
                        <SearchInput type='text' placeholder='Search by theatre...' />
                        <DateInput type='date' value='2021/12/23' />
                    </InputContainer>
                    <Button>Search</Button>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Hero_theatre
import styled from "styled-components"
import { FiArrowRight } from "react-icons/fi";
import { VscLocation } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Container = styled.div`
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
height: 560px;
background: #2E2E2E;
`

const Left = styled.div`
flex: 2;
background: #3D3D3D;
height: 560px;
padding: 5%;
display: flex;
justify-content: center;
flex-direction: column;
`

const Right = styled.div`
flex: 3;
height: 560px;
padding: 5%;
background: #2E2E2E;
`

const Title = styled.h1`
letter-spacing:2px;
font-weight: 500;
font-size: 64px;
`

const Text = styled.p`
line-height: 32px;
letter-spacing:2px;
font-weight: 100;
`

const Newsletter = styled.div``

const Heading = styled.h3`
letter-spacing:2px;
`
const InputContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
width: 70%;
`

const Input = styled.input`
flex: 9;
height: 50px;
background: #525252;
border-radius: 8px;
border: none;
padding-left: 10px;
`

const Button = styled.button`
flex: 1;
background: #FED530;
border-radius: 8px;
border: none;
cursor: pointer;
`
const TopItems = styled.div`
display: flex;
align-items: center;
justify-content: start;
padding: 30px;
`

const Products = styled.div`
margin-right: 70px;
padding: 20px;
`

const ListItem = styled.p`
margin-bottom: 30px;
`

const Media = styled.div`
margin-right: 70px;
padding: 20px;
`

const Sitemap = styled.div`
padding: 20px;
`

const BottomItems = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 30px;
`

const LocationContainer = styled.div`
display: flex;
align-items: center;
`

const EmailContainer = styled.div`
display: flex;
align-items: center;
`

const PhoneContainer = styled.div`
display: flex;
align-items: center;
`

const Info = styled.p`
margin-left: 5px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Title>PcariMovie</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis aliquam accusamus quae eos rem ducimus, fuga error dicta eligendi?</Text>
                <Newsletter>
                    <Heading>Join Newsletter</Heading>
                    <InputContainer>
                        <Input placeholder="Insert your mail here" />
                        <Button><FiArrowRight size={20} /></Button>
                    </InputContainer>
                </Newsletter>
            </Left>
            <Right>
                <TopItems>
                    <Products>
                        <ListItem>Product</ListItem>
                        <ListItem>Movies</ListItem>
                        <ListItem>TV Show</ListItem>
                        <ListItem>Videos</ListItem>
                    </Products>
                    <Media>
                        <ListItem>Media Group</ListItem>
                        <ListItem>Nice Studio</ListItem>
                        <ListItem>Nice News</ListItem>
                        <ListItem>Nice TV</ListItem>
                    </Media>
                    <Sitemap>
                        <ListItem>Sitemap</ListItem>
                        <ListItem>About</ListItem>
                        <ListItem>Careers</ListItem>
                        <ListItem>Press</ListItem>
                    </Sitemap>
                </TopItems>
                <BottomItems>
                    <LocationContainer>
                        <VscLocation />
                        <Info>8819 Ohio St. South Gate, California 90280</Info>
                    </LocationContainer>
                    <EmailContainer>
                        <AiOutlineMail />
                        <Info>Ourstudio@hello.com</Info>
                    </EmailContainer>
                    <PhoneContainer>
                        <BsTelephone />
                        <Info>+271 386-647-3637</Info>
                    </PhoneContainer>
                </BottomItems>
            </Right>
        </Container>
    )
}

export default Footer
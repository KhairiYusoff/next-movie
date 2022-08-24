import styled from "styled-components"
import { RiSearchLine } from "react-icons/ri";

const Container = styled.div`
background: #333333;
margin: 0 auto;
`

const Nav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 5%;
`

const Logo = styled.h4`
color: #FFFFFF;
font-weight: 700;
font-size: 32px;
line-height: 48px;
`

const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const MenuItems = styled.a`
font-weight: 400;
font-size: 16px;
line-height: 32px;
color: #E6E6E6;
position: relative;
letter-spacing: 1.5px;
text-decoration: none;
margin: 24px;
cursor: pointer;

&:hover{
  border-bottom: 4px solid #FED530;
}
`

const Right = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
`

const RightItems = styled.h6`
margin-left: 15px;
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
`

const RightCircle = styled.div`
width: 48px;
height: 48px;
background: #1E1E1E;
border-radius: 50%;
margin-left: 15px;
`

const SearchIcon = styled.div`
cursor: pointer;
margin-right: 30px;
`
const Navbar = () => {
    return (
        <Container>
            <Nav>
                <Logo>
                    PcariMovie
                </Logo>
                <Menu>
                    <MenuItems>Home</MenuItems>
                    <MenuItems>Movies</MenuItems>
                    <MenuItems>TV Show</MenuItems>
                    <MenuItems>Video</MenuItems>
                    <MenuItems>FAQ</MenuItems>
                    <MenuItems>Pricing</MenuItems>
                    <MenuItems>Contact Us</MenuItems>
                </Menu>
                <Right>
                    <SearchIcon>
                        <RiSearchLine size={20} />
                    </SearchIcon>
                    <RightCircle></RightCircle>
                    <RightItems>John Glich</RightItems>
                </Right>
            </Nav>
        </Container>
    )
}

export default Navbar
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

const Logo = styled.h1`

`

const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const MenuItems = styled.a`
position: relative;
letter-spacing: 1.5px;
text-decoration: none;
padding:0 20px;
cursor: pointer;
&:after{
    content: "";
    position: absolute;
    background-color: #FED530;
    height: 4px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.5s;
}
&:hover::after{
  width: 100%;
}
`

const Right = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
`

const RightItems = styled.div`
margin-left: 15px;
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
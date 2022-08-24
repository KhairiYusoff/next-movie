import styled from "styled-components"

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

const MenuItems = styled.div`
padding: 0 20px;
`

const Right = styled.div``

const RightItems = styled.div``

const RightCircle = styled.div``


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
                    <RightItems></RightItems>
                    <RightCircle></RightCircle>
                    <RightItems>John Glich</RightItems>
                </Right>
            </Nav>
        </Container>
    )
}

export default Navbar
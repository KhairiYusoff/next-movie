import styled from "styled-components"

const Container = styled.div`
background: linear-gradient(270deg, #000000 -2.92%, rgba(0, 0, 0, 0) 100%);
`

const Nav = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
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
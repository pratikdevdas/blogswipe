import styled from "styled-components";
import Link from 'next/link'

const Container = styled.div`
 max-width: 1110px;
 margin: auto;
 padding-top: 70px;
`

const Wrapper = styled.nav`
display: flex;
justify-content: space-between;
`
 const BrandName = styled.h1`
 `
const NavElements = styled.ul`
display: flex;
justify-content: space-between;
gap: clamp(1rem, 10vw, 2rem);
cursor: pointer;
/* gap: 20px; */
list-style: none;
align-items: center;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <BrandName>Recommend Me a Blog</BrandName>
                <NavElements>
                    <Link href="/">
                    <li>Home</li>
                    </Link>
                    <Link href='/blogs/home'>
                    <li>Read</li>
                    </Link>
                    {/* <Link></Link> */}
                    {/* <Link></Link> */}
                    {/* <Link></Link> */}
                    
                    
                    <li>Brad</li>
                    <li>Sign Up</li>
                    <li>Login</li>
                </NavElements>
            </Wrapper>
        </Container>
    );
}

export default Navbar;   
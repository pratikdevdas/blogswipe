import styled from 'styled-components'
import Link from 'next/link'

// --fs-300: 0.8125rem;
// --fs-400: 0.875rem;
// --fs-500: 0.9375rem;
// --fs-600: 1rem;
// --fs-700: 1.875rem;
// --fs-800: 2.5rem;
// --fs-900: 3.5rem;

const Container = styled.div`
 margin: auto;
 padding: 36px;
 background-color: rgb(4, 28, 50);
 /* 151110 */
 color: white
`

const Wrapper = styled.nav`
display: flex;
max-width: 1200px;
margin: auto;
justify-content: space-between;
`
const BrandName = styled.h1`
font-weight: 800;
font-size: 1.5rem;
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
                    <Link href='/blogs/'>
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
    )
}

export default Navbar
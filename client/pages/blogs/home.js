import Navbar from '../../components/Navbar'
import Blogs from '../../components/Blogs'
import styled from 'styled-components'
import React,{ useState } from 'react'
import data from '../../data.js'


const Container = styled.div`
max-width: 1110px;
margin: auto;
`

const Content = styled.div`
`

const LeftButton = styled.button`
background-color: red;
border-radius: 50%;
`

const WriteUp = styled.div``
const RightButton = styled.button`background-color: red;

border-radius: 50%;`


const BlogHome = () => {
    const [counter, setCounter] = useState(0)
    console.log(counter)
    console.log(data[1].name)

    return (
        <Container>
            <Navbar></Navbar>
            <Content>
                <LeftButton onClick={() => {setCounter(counter - 1)}}>L</LeftButton>
                <WriteUp>{data[counter]?.name}sfd<Blogs></Blogs></WriteUp>
                    hgf
                <RightButton onClick={() => {setCounter(counter + 1)}}>R</RightButton>
            </Content>
        </Container>
    )
}

export default BlogHome
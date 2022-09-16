import Navbar from '../../components/Navbar'
// import Blogs from '../../components/Blogs'
import styled from 'styled-components'
import React,{ useState, useEffect } from 'react'
// import data from '../../data.js'
import axios from 'axios'

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
const RightButton = styled.button`
background-color: red;
border-radius: 50%;`


const BlogHome = () => {
    const [counter, setCounter] = useState(1)
    const [data, setData] = useState('')
    console.log(counter)

    useEffect(() => {
        async function fetchData (){
            const response = await axios.get('http://localhost:8001/posts')
            setData(response.data)
            setCounter( Math.floor(Math.random()*100))
        }
        fetchData()
    },[])

    return (
        <Container>
            <Navbar></Navbar>
            <Content>
                <LeftButton onClick={() => {setCounter(counter === 0 ? 99 : counter - 1)}}>L</LeftButton>
                <WriteUp>{data[counter]?.author}
                    {/* {data[counter]?.reveal} */}
                </WriteUp>
                    hgf
                <RightButton onClick={() => {setCounter(counter === 99 ? 1 : counter + 1)}}>R</RightButton>
            </Content>
        </Container>
    )
}

export default BlogHome
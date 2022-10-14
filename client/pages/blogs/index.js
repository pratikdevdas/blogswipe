import Navbar from '../../components/Navbar'
// import Blogs from '../../components/Blogs'
import styled from 'styled-components'
import React,{ useState, useEffect } from 'react'
// import data from '../../data.js'
import blogService from '../../services/index'
const Container = styled.div`

`

const Content = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 90vh;
max-width: 1110px;
margin: auto;
`

const LeftButton = styled.button`
width: 50px;
height: 50px;
border-radius: 50%;
opacity: .9;
border: none;
/* filter: blur(1px); */
position: relative;
`

const WriteUp = styled.div``
const RightButton = styled.button`
width: 50px;
height: 50px;
border-radius: 50%;`


const BlogHome = () => {
    const [counter, setCounter] = useState(1)
    const [data, setData] = useState('')
    const [reveal, setReveal] = useState(false)
    console.log(counter)

    useEffect(() => {
        blogService.getAll().then(blogs => setData(blogs))
    },[])


    const handleRightClick = () => {
        setCounter(counter === 99 ? 1 : counter + 1)
        setReveal(false)
    }
    const handleLeftClick = () => {
        setCounter(counter === 0 ? 99 : counter - 1)
        setReveal(false)
    }
    return (
        <Container>
            <Navbar/>
            <Content>
                <LeftButton onClick={handleLeftClick}>L</LeftButton>
                <WriteUp>{data[counter]?.author}
                    <div>
                        <button onClick={() => setReveal(true)}>{reveal ? <>revealed</>: <>reveal title</>}</button>
                    </div>
                    <div>
                        {reveal ? <>{data[counter]?.title}</> : <></>}
                    </div>
                </WriteUp>
                <RightButton onClick={handleRightClick}>R</RightButton>
            </Content>
        </Container>
    )
}

export default BlogHome
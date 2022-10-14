import axios from 'axios'
const baseUrl = 'http://localhost:8001/posts'

const getAll = async() => {
    const response = await axios.get(baseUrl)
    console.log(response.data)
    return response.data
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll }
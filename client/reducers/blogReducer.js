import { createSlice } from '@reduxjs/toolkit'

const blogSlice =  createSlice({
    name: 'blogs',
    initialState: [],
   reducers: {
    setBlogs(state,action){
        return action.payload
    }
   } 
})

export const {
    appendBlog
} = blogSlice.actions
'use client'
import React, { useState } from 'react'
import '../Dashboard/Dashboard.css'
import { useBlogContext } from '../Context/dbContext'

function CreateBlog({userData, setActiveTab}) {
    const [BlogData, setBlogData] = useState({
        title: "",
        Subtitle: "",
        BlogText: "",
    })
    
    const {createBlog} =  useBlogContext()

    const handleCreateBlog  = async(e)=>{
        e.preventDefault()
        if (!BlogData.title || !BlogData.Subtitle || !BlogData.BlogText) {
            alert("Please fill in all fields");
            return;
        }

        try {
            const blog = await createBlog(userData,BlogData)
            // setActiveTab("Home")
            console.log(blog)
        } catch (error) {
            console.log(error)
            
        }

    }
    return (
        <div className="create-blog">
            <form className="createBlogForm" onSubmit={handleCreateBlog}>
                <div className="title">
                    <h4>Title*</h4>
                    <input type="text" placeholder='title' value={BlogData.title} onChange={(e)=>setBlogData({...BlogData,title:e.target.value})} />
                </div>
                <div className="title">
                    <h4>Sub Title*</h4>
                    <input type="text" placeholder='Sub title' value={BlogData.Subtitle} onChange={(e)=>setBlogData({...BlogData,Subtitle:e.target.value})} />
                </div>
                <div className="blog-txt">
                    <h4>Text*</h4>
                    <textarea type="text" placeholder='Enter Your Text'value={BlogData.BlogText} onChange={(e)=>setBlogData({...BlogData,BlogText:e.target.value})} />
                </div>
                <div className="btn" style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', width:'100%'}} >
                    <button type='submit'>Create</button>
                    <button>Cancle</button>
                </div>


            </form>
        </div>
    )
}

export default CreateBlog

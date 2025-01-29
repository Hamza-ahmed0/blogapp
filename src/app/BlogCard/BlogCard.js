'use client'
import { CachedRouteKind } from 'next/dist/server/response-cache'
import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { BiLike } from "react-icons/bi";
import { BiCommentDots } from "react-icons/bi";



import '../BlogCard/BlogCard.css'

export default function BlogCard({data, setModal, setSelectedModal}) {
  const [isIconImage, setIsIconImage] = useState(false)
  // const content = data.BlogContent.substring(0,100)
  
  const content = data.content.substring(0,60)

  const handleModal = (data) =>{
    setModal(true)
    setSelectedModal(data)

  }
  
  return (
    <div className='blog-card'>
        <div className='card-header'>
          <div className='avatar'>
            {
              isIconImage ? 
              <div className='Icon-image'></div>
              :<RxAvatar className='icon'/>
            }
            <p className='user-name'>name</p>
            
          </div>
          <div className='close-icon'>
          <IoIosCloseCircle  className='icon'/>
          </div>



        </div>
        <div className='blog-card-body'>
          <h1>{data.title}</h1>
          <p>{content}<button onClick={()=>handleModal(data)}>...SeeMore</button></p>
          

        </div>
        <div className='blog-card-footer'>
            <p><BiLike/> : 40</p>
        </div>

    </div>
  )
}

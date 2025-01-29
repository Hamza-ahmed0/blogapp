'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RxAvatar } from 'react-icons/rx'
import BlogCard from '../../BlogCard/BlogCard'
import "../../Dashboard/Dashboard.css"
import Sidebar from '../Sidebar'
import CreateBlog from '../CreateBlog'
import MyBlogPost from '../MyBlogPost'
import Favorite from '../Favorite'
import { useParams, useRouter } from 'next/navigation'
import { getDoc, doc } from 'firebase/firestore'
import {db} from '../../firebase'

function Dashboard() {
  const [Activetab, setActiveTab] = useState('Home');
  const [Err, setErr] = useState(null)
  const {userId} = useParams()
  const router = useRouter()

  const [userData, setUserData] = useState()

  useEffect(()=>{
      const fetchUSer = async () =>{
           if(!userId) return;

           try {
            const userDoc = await getDoc(doc(db, 'users', userId))
            console.log(userDoc.data())
            setUserData(userDoc.data())
           } catch (error) {
              console.log(error)
            
           }
      }
      fetchUSer()
  },[userId])

  useEffect(()=>{
     console.log(userData)
  },[userData])

  const handleTab = (tab) => {
    setActiveTab(tab)

  }


  // if (Err) {
  //   return (
  //     <div className="error-container">
  //       <h1>{Err}</h1>
  //       <p>Redirecting to the homepage...</p>
  //     </div>
  //   );
  // }

  // if (!userData) {
  //   return (
  //     <div className="loading-container">
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
  return (
    <div className="dashbooard">
      <nav className='dashboard-nav'>
        <div>
          <h1>Dashboard</h1>
        </div>
        <div className='nav-item'>
          <RxAvatar />
          {
            userData ? <h3>{userData.Name}</h3> : <h3>UserName</h3> 
          }
          
        </div>

      </nav>


      <div className="dashboard-blog">
        <Sidebar handleTab={handleTab} />
        <div className="tabs">
          {Activetab === 'Home' && <MyBlogPost userId={userId} />}
          {Activetab === 'Create' && <CreateBlog userData={userData} setActiveTab={setActiveTab}/>}
          {Activetab === 'Favorite' && <Favorite />}

        </div>

      </div>
    </div>
  )
}

export default Dashboard

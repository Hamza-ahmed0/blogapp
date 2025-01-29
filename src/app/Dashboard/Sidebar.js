import React from 'react'
import { IoHome } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import '../Dashboard/Dashboard.css'
import { useAuth } from '../Context/authContext';
import { useRouter } from 'next/navigation';
import { BiErrorCircle } from 'react-icons/bi';





function Sidebar({handleTab}) {

  const {LogOut} = useAuth()
  const route = useRouter()


  const handleLogout = async() =>{
      try {
        await LogOut()
        route.push('/Main')

      } catch (error) {
        console.log(error)
      }
  }
  return (
    <div className="sidebar">
        <div className="sidebar-list">
            <ul>
                <li onClick={()=>handleTab('Home')}><IoHome/>Home</li>
                <li onClick={()=>handleTab('Create')}><IoCreate/>Create Blog</li>
                <li onClick={()=>handleTab('Favorite')}><MdOutlineFavorite/>Favorite</li>
                <li onClick={()=>handleLogout()}><IoLogOut/>Logout</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar

'use client'
import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import Link from 'next/link'
import { useAuth } from '../Context/authContext'

export default function Navbar() {
  const category = [
    "Technology",
    "Health & Wellness",
    "Finance",
    "Travel",
    "Food & Recipes",
    "Education",
    "Lifestyle",
  ]
  const {user} = useAuth()
  
const [userId , setUserId] = useState(user ? user.uid : null)
console.log(userId)



  return (
    <>

      <nav className="navbar">
        <h1>
          BLOG
        </h1>
        <ul>
          {
            user ?
              <li><Link href={`/Dashboard/${userId}`}>Dashboard</Link></li>
              :
              <>
                <li>
                  <Link href='/SignIn'>Sign In</Link>
                </li>
                <li>
                  <Link href='/SignUp'>SignUp</Link>
                </li>
              </>


          }

        </ul>
      </nav>

      <div className="category-bar">
        <div className='category-list'>
          <ul>
            {
              category.map((cat, index) => (
                <li key={index}>{cat}</li>
              ))
            }
          </ul>
        </div>


      </div>
    </>
  )
}

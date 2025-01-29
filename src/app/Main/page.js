'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import BlogCard from '../BlogCard/BlogCard'
// import { collectMeta } from 'next/dist/build/utils'
import { collection, onSnapshot } from 'firebase/firestore'
import BlogModal from '../BlogModal/BlogModal'

function Main() {
  const [modal, setModal] = useState(false)
  const [selectModal, setselectedModal] = useState({})
  const [AllBlogs, SetAllBlogs] = useState( [{
    title: "First Blog",
    subtitle:"First Blog Subtitle",
    content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, aspernatur. Delectus iste provident, quibusdam sequi nemo praesentium accusamus quia ad numquam eos consequuntur quas natus! Animi, nulla facere. Voluptatibus, odit."

  },
  {
    title: "Second Blog",
    subtitle:"Second Blog Subtitle",
    content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, aspernatur. Delectus iste provident, quibusdam sequi nemo praesentium accusamus quia ad numquam eos consequuntur quas natus! Animi, nulla facere. Voluptatibus, odit."

  },
  {
    title: "Third Blog",
    subtitle:"Third Blog Subtitle",
    content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, aspernatur. Delectus iste provident, quibusdam sequi nemo praesentium accusamus quia ad numquam eos consequuntur quas natus! Animi, nulla facere. Voluptatibus, odit."

  },
  {
    title: "Fourth Blog",
    subtitle:"Fourth Blog Subtitle",
    content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, aspernatur. Delectus iste provident, quibusdam sequi nemo praesentium accusamus quia ad numquam eos consequuntur quas natus! Animi, nulla facere. Voluptatibus, odit."

  }])
  const [loading, setLoading] = useState(false)
  const [err, seterr] = useState()

  useEffect(()=>{
    const fetchBlogs = () =>{
      setLoading(true)
      try {
        const blogs = onSnapshot(collection(db, 'Blogs'), (snapshot) =>{
          const userBlogs = snapshot.docs.map((docs)=>({
            id:docs.id,
            ...docs.data()
          }))
          SetAllBlogs(userBlogs)
          setLoading(false)
        })
        
      } catch (error) {

        seterr("Something wrong in fetching blog", error)

        
      }
    }

    fetchBlogs()
  },[loading, AllBlogs])



  return (
    <div>

        <Navbar/>
        {
          // loading ? 
          // <div>...loading</div>
          // :
          AllBlogs.map((data, index)=>(
            <BlogCard key={index} data={data} moda={modal} setModal={setModal}  setSelectedModal={setselectedModal}/>
          ))

        }

        <BlogModal  modal={modal}  selectModal={selectModal} setModal={setModal}/>
        
      
    </div>
  )
}

export default Main

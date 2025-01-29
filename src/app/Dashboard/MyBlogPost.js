import React, { useEffect, useState } from 'react'
import BlogCard from '../BlogCard/BlogCard'
import '../Dashboard/Dashboard.css'
import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore'
import { getDisplayName } from 'next/dist/shared/lib/utils'
import { db } from '../firebase'

function MyBlogPost({ userId }) {

    const [blogData, setBlogdata] = useState([])
    const [loading, setloading] = useState(false)
    const [Err, setErr] = useState()
    const [modal, setModal] = useState(false)
    const [selectModal, setselectedModal] = useState({})


    useEffect(() => {
        const fecthBlogData = async () => {
            try {
                setloading(true)
                const blogsQuery = query(collection(db, 'Blogs'), where('userId', '==', userId));
                const blog = onSnapshot(
                    blogsQuery,
                    (querySnapshot) => {
                        const userBlogs = querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }));
                        setBlogdata(userBlogs);
                        setloading(false);
                    },

                );


            } catch (error) {
                console.error('Error fetching blogs:', error);
                setErr('Failed to fetch blogs. Please try again.');
                setloading(false);

            }

        }

        fecthBlogData()

    }, [loading, userId])


    if (loading) {
        return (
            <div>....Loading</div>
        )
    }

    return (
        <div className="blog-post">
            <div className="head-blog">

                < div className='user-data'>
                    <h4 >{blogData.length}</h4>
                    <h1>1000</h1>
                </div>
            </div>
            <div className="blog-body">
                {
                    loading ? 
                    <div>...loading</div>
                    :
                    
                    blogData.map((data, index) => (
                        <BlogCard key={index} data={data} moda={modal} setModal={setModal} setSelectedModal={setselectedModal} />
                    ))

                }

                
            </div>


            <BlogModal modal={modal} selectModal={selectModal} setModal={setModal} />
        </div>

    )
}

export default MyBlogPost




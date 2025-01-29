'use client'
import React, { useState } from 'react'
import '../BlogModal/BlogModal.css'
import ReactModal from 'react-modal'
import { IoIosCloseCircle } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { BiLike } from "react-icons/bi";
function BlogModal({ modal, selectModal, setModal }) {
    const [isIconImage, setIsIconImage] = useState(false)



    return (
        <ReactModal isOpen={modal} ariaHideApp={false} style={{
            overlay: {
                padding: 0,
            }, content: {
                padding: 0
            }
        }}>
            <div className="blog-modal-header">
                <div className='card-header'>
                    <div className='avatar'>
                        {
                            isIconImage ?
                                <div className='Icon-image'></div>
                                : <RxAvatar className='icon' />
                        }
                        <p className='user-name'>name</p>

                    </div>
                    <div className='close-icon'>
                        <IoIosCloseCircle className='icon' onClick={() => setModal(false)} />
                    </div>



                </div>
            </div>
            <div className="modal-body">
                {
                    selectModal &&
                    <>

                        <h1>{selectModal.title}</h1>
                        <h4>{selectModal.subtitle}</h4>
                        <p>Posted: {selectModal.date}</p>
                    </>
                }

                <p className="blog-content">
                    {selectModal.content}
                </p>
            </div>
            <div className="blog-modal-footer">
                <div className='blog-card-footer'>
                    <p><BiLike /> : 40</p>
                </div>
            </div>

        </ReactModal>
    )
}

export default BlogModal

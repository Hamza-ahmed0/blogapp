'use client'
import { createContext, useContext, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const dbContext = createContext()


export const DbProvider = ({children}) =>{
    const auth = getAuth()
    const user = auth.currentUser

    const createBlog =async (userData, BlogData) =>{
        
        console.log(user.uid, BlogData)
        try {
            console.log(userData.userId)
            const docref = doc(db, "Blogs",user.uid)
            await setDoc(docref, {
                userId: user.uid,
                Name: userData.name,
                date: Date.now(),
                title: BlogData.title,
                subtitle: BlogData.heading,
                content: BlogData.content,
                like: 0,
            });
            console.log("Blog created")
        } catch (error) {
            console.log(error)
        }
         
    }


    return(
        <dbContext.Provider value={{createBlog}}>
            {children}
        </dbContext.Provider>
    )

}

export const useBlogContext = ()=> useContext(dbContext)
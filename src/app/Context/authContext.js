'use client'
import { createContext , useContext, useState } from "react";
import {auth, db }from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
// import { getDisplayName } from "next/dist/shared/lib/utils";
const authContext = createContext()



export const AuthProvider =({children})=>{

    const [user, setUser] = useState(null)

    const signUp = async ( name, email, password) =>{
        console.log(email,password)
        try {
            const userCredentialls = await createUserWithEmailAndPassword(auth, email, password)
            const User = userCredentialls.user
            setUser(User)
            const UserInDb = await setDoc(doc(db, "users", User.uid),{
                "userId": User.uid, 
                "Name": name,
                "Email":email,
                "Created At" : Date.now()
            })
            console.log(UserInDb)
            return user
        } catch (error) {
            console.log(error)
            
        }

    }

    const LogIn = async (email, password) =>{
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password)
            const User= userCredentials.user
            setUser(User)
        } catch (error) {
            console.log(error)
        }
    }

    const LogOut = async () =>{
        try{
            await signOut(auth)
            setUser(null)
        }catch(error){
            console.log(error)
        }
    }


    return(
        <authContext.Provider value={{user , signUp, LogIn,LogOut}}>
            {children}
        </authContext.Provider>
    )
}


export const useAuth = () => useContext(authContext)
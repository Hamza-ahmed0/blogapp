'use client'
import React, { useEffect, useState } from 'react'
import './Signup.css'
import { useAuth } from '../Context/authContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
function SignUp() {
    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPass, setConfirmPass] = useState()
    const [signUpInitiated, setSignUpInitiated] = useState(false);
    const [err, setErr] = useState("")

    const route = useRouter()

    const { signUp, user } = useAuth()

    const handleSignUp = async (e) => {
        e.preventDefault()
        console.log(password)
        setErr('')
        setSignUpInitiated(true)

        if (!email || !name || !lastName || !password || !confirmPass) {
            setErr("All fields Required")
            return;
        }


        if (password.length < 8) {
            setErr("Password Required max 8 characters")
            return
        }
        if (password !== confirmPass) {
            setErr("Password Not Match")
            return;
        }



        try {
            await signUp(name, email, password);




        } catch (error) {
            setErr("Failed to create user")
            setSignUpInitiated(false)
            console.log(error)

        }

    }

    useEffect(() => {
        if (signUpInitiated && user) {
            route.push('/SignIn');
            alert("Signup successfully");
        } else if (signUpInitiated) {
            alert("Failed to create user");
        }
    }, [user, signUpInitiated, route]);


    return (
        <div className='signup'>

            <form className='signup-form' onSubmit={handleSignUp}>
                <h1>Sign Up</h1>
                <p>Get Your account</p>
                <div className='input-container-1'>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '190px' }}>
                        <label>First Name</label>
                        <input placeholder='Name' value={name} onChange={(val) => setName(val.target.value)} />

                    </div>


                    <div style={{ display: 'flex', flexDirection: 'column', width: '190px' }}>
                        <label>Last Name</label>
                        <input placeholder='Last Name' value={lastName} onChange={(val) => setLastName(val.target.value)} />

                    </div>

                </div>
                <div className='input-container'>
                    <label>Email</label>
                    <input placeholder='Email' value={email} onChange={(val) => setEmail(val.target.value)} />
                </div>
                <div className='input-container'>
                    <label>Password</label>
                    <input placeholder='Password' type='password' max={16} value={password} onChange={(val) => setPassword(val.target.value)} />
                </div>
                <div className='input-container'>
                    <label>Confirm Password</label>
                    <input placeholder='Password' type='password' max={16} value={confirmPass} onChange={(val) => setConfirmPass(val.target.value)} />
                </div>

                <div className='btn'>
                    <p className='error'>{err}</p>
                    <button type='submit'>SIGNUP</button>
                    <p>Already SignUp? <Link href="/SignIn">LogIn</Link></p>
                </div>
            </form>
        </div>
    )
}

export default SignUp

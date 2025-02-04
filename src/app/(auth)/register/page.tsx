"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios  from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();
    const [user,setUser]=React.useState({
         email:"",
         password:"",
         username:"",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () =>{
        try {
            setLoading(true)
            const response = await axios.post("/api/users/signup",user);
            console.log("signup success",response.data);
            router.push("/login");
            
        } catch (error:any) {
            console.log("signup failed",error.message);
            
            toast.error(error.message)
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0 && user.username.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2" 
        >
            <div className="flex flex-col items-center justify-center border-t border-grey-800 bg-orange-400 p-8 text-lg font-black rounded-lg inline-block">
            <h1>{loading ? "Processing" : "Signup"}</h1>
            <hr/>
            <label htmlFor="username">username</label>
            <input className="p-2 border-gray-400 rounded-lg mb-4 focus:outline-none 
            focus:border-gray-600 text-black" 
            id="username" type="text" value={user.username} 
            onChange={(e)=>setUser({...user,username:e.target.value})}
            placeholder="username"
            />
            <label htmlFor="email">email</label>
            <input className="p-2 border-gray-400 rounded-lg mb-4 focus:outline-none 
            focus:border-gray-600 text-black" 
            id="email" type="text" value={user.email} 
            onChange={(e)=>setUser({...user,email:e.target.value})}
            placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input className="p-2 border-gray-400 rounded-lg mb-4 focus:outline-none 
            focus:border-gray-600 text-black" 
            id="password" type="password" value={user.password} 
            onChange={(e)=>setUser({...user,password:e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onSignup} 
            className="p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none 
            focus:border-gray-600">{buttonDisabled ? "No Signup" : "Signup"}</button>
            <Link href="/login">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                visit login page</button></Link>
        </div>
        </div>
    )
}
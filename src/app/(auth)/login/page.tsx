"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [user,setUser]=React.useState({
         email:"",
         password:"",
    })

    const onLogin = async () =>{

    }
    return (
        
        <div className="flex flex-col items-center justify-center  min-h-screen py-2">
            <div className="flex flex-col items-center justify-center border-t border-grey-800 bg-orange-400 p-8 text-lg font-black rounded-lg inline-block">
            <h1>Login</h1>
            <hr/>
            <label htmlFor="email">email</label>
            <input className="p-2 border-gray-400 text-gray-800 rounded-lg mb-4 focus:outline-none focus:border-gray-600" 
            id="email" type="text" value={user.email} 
            onChange={(e)=>setUser({...user,email:e.target.value})}
            placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input className="p-2 border-gray-400 text-gray-800 rounded-lg mb-4 focus:outline-none focus:border-gray-600" 
            id="password" type="password" value={user.password} 
            onChange={(e)=>setUser({...user,password:e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onLogin} 
            className="p-2 border border-gray-400 text-gray-800 rounded-lg mb-4 focus:outline-none 
            focus:border-gray-600"><Link href="/">Login Here</Link></button>
            <Link href="/register"><button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">visit signup page</button></Link>
            </div>
        </div>
    )
}
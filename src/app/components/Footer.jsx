import { Facebook, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
            <Link href={"/"} className="link link-hover text-base text-gray-700">Home</Link>
            <Link href={"/profile"} className="link link-hover text-base text-gray-700">Profile</Link>
            <Link href={"/about"} className="link link-hover text-base text-gray-700">About</Link>
        </nav>
        <nav>
            <div className="grid grid-flow-col gap-4 space-x-4">
            
            <a className='p-2 border rounded-full border-gray-300 bg-transparent hover:bg-gray-300 duration-300 transition-all' href=""><Facebook /></a>
            <a className='p-2 border rounded-full border-gray-300 bg-transparent hover:bg-gray-300 duration-300 transition-all' href=""><Github /></a>
            <a className='p-2 border rounded-full border-gray-300 bg-transparent hover:bg-gray-300 duration-300 transition-all' href=""><Linkedin /></a>
            
            </div>
        </nav>
        <aside>
            <p className='text-base font-gray-700'>Copyright © {new Date().getFullYear()} - All right reserved by Blog Bench</p>
        </aside>
    </footer>
  )
}

export default Footer

import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'
// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { getKindeServerSession, LoginLink, LogoutLink, RegisterLink, isLoading, isAuthenticated } from '@kinde-oss/kinde-auth-nextjs/server';
// const { user, isLoading, isAuthenticated, login, logout } = useKindeBrowserClient()

const Navbar = async () => {
    const {getUser, isAuthenticated} = getKindeServerSession();
    const user = await getUser();

  return (
    <div className='w-full bg-white/60 sticky top-0 shadow-md z-50 backdrop-blur-xl'>
        <nav className='max-w-7xl mx-auto px-4 py-4 xl:px-0 flex items-center justify-between'>
            <div className='text-xl md:text-[26px] font-bold uppercase'>
                <Link href={"/"}>Blog Bench</Link>
            </div>
            <div className='flex items-center gap-4'>
                <NavItems/>
                {
                    !isLoading && <div className='space-x-2'>
                        {
                        isAuthenticated ? 
                        // <Link href={"api/auth/logout"}>
                        <LogoutLink>
                            <button
                            className="px-4 py-1.5 border border-[#3e3939] bg-base-100 text-[#000000] hover:bg-[#000000] hover:text-white transition duration-300 rounded-md shadow-md">
                                Log Out
                            </button>
                        </LogoutLink>
                        : 
                       <> 
                       <LoginLink>
                        <button  onClick={() => login()}
                        className="px-4 py-1.5 border border-[#3e3939] bg-[#000000] text-white hover:bg-transparent hover:text-[#000] transition duration-300 rounded-md shadow-md">
                            Log in
                        </button>
                        </LoginLink>
                        
                        <RegisterLink>                      
                            <button onClick={() => login()}
                            className="px-4 py-1.5 border border-[#3e3939] bg-base-100 text-[#000000] hover:bg-[#000000] hover:text-white transition duration-300 rounded-md shadow-md">
                                Register
                            </button>
                        </RegisterLink>
                    </>
                    }
                    </div>
                }
                
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar

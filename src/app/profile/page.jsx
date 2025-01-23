import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import React from 'react'
import { redirect } from "next/navigation"
import profile from "../../assets/hacker.png"

const Profile = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user) {
    redirect("/api/auth/login?post_login_redirect_url=/profile")
  }
  console.log(user)
  return (
    <div className='w-full min-h-full'>
      <div className='max-w-3xl mx-auto flex items-center gap-8 border blog-details min-h-[30vh] my-24 p-6 lg:p-10 '>
        <div className='border-r-2 border-gray-300 px-6 h-full'>
          <img src={user?.picture || profile} alt="" className='w-20 h-20' />
        </div>

        <div>
          <h3 className='text-3xl font-semibold text-black/75 text-center'>Welcome to your profile! </h3>
            <p className='flex items-center gap-4'>
              <span>Name:</span>
              <span>{user.given_name} {user.family_name}</span>
            </p>
            <p className='flex items-center gap-4'>
              <span>Name:</span>
              <span>{user.email}</span>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Profile

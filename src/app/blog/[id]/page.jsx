import React from 'react'

const BlogDetails = async ({params}) => {
    const {id} = await params; 
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

  return (
    <div className='p-6 ld:p-10 w-full my-24 border blog-details h-full min-h-[70vh] rounded-md'>
        <h3 className='text-3xl font-semibold first-letter:uppercase lowercase'>{data?.title}</h3>
        <p className='my-4 text-2xl text-gray-700'>Description:</p>
        <p className='first-letter:uppercase lowercase my-6 text-lg text-gray-600'>{data.body}</p>
    </div>
  )
}

export default BlogDetails

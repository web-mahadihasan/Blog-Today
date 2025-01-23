import Image from "next/image";
import Link from "next/link";
import Blogs from "./components/Blogs";
import banner from "../assets/bg.png"

const  Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const blogData = await res.json()
  return (
    <div className="my-2">
      {/* Banner  */}
      <div
        className="hero min-h-[500px] w-full rounded-md"
        style={{
          backgroundImage: `url('./bg.png')`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl md:text-4xl font-bold">Welcome to Our Blog</h1>
            <p className="mb-5">
              This concise version should fit well for a blog banner. Let me know if you'd like any other tweaks! 😊
            </p>
            <Link href={'#blogs'}>
              <button
              className="px-4 py-1.5 border border-[#3e3939] bg-[#000000] text-white hover:bg-transparent hover:text-[#000] transition duration-300 rounded-md shadow-md">
                  Start Read
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div  className="my-20">        
          <div className="text-center mb-10">
            <h3 id="blogs" className="text-3xl font-semibold text-gray-700">Explore Knowledge Hub</h3>
            <p className="text-lg text-gray-500 my-2">Catch up on our latest posts and discover a world of knowledge, one blog at a time.</p>
          </div>

        <div>
          <Blogs/>
        </div>
      </div>
    </div>
  );
}

export default Home

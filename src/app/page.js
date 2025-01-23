import Image from "next/image";
import Link from "next/link";
import Blogs from "./components/Blogs";

const  Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const blogData = await res.json()
  return (
    <div className="my-10">
      {/* Banner  */}
      <div>        
          <div className="text-center mb-10">
            <h3 className="text-3xl font-semibold text-gray-700">Explore Knowledge Hub</h3>
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

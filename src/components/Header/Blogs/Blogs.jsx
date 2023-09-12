import { useState ,useEffect} from "react";
import Blog from "../../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmark}) => {
    const [blogs,setBlogs]=useState([])
    

   useEffect(()=>{
    fetch('blog.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
   },[])

   
    return (
        <div className="md:w-2/3">
            <h3>Blogs: {blogs.length}</h3>
            {
                blogs.map(blog=><Blog 
                key={blog.id} blog={blog}
                handleBookmark={handleBookmark}
                >

                </Blog>)
            }
            
        </div>
    );
};
Blogs.propTypes={
    handleBookmark:PropTypes.func 
}

export default Blogs;
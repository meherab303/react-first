import { useState ,useEffect} from "react";
import Blog from "../../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmark,handleMarkAsRead}) => {
    const [blogs,setBlogs]=useState([])
    

   useEffect(()=>{
    fetch('blog.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
   },[])

   
    return (
        <div className="md:w-2/3 my-6">
           
            {
                blogs.map(blog=><Blog 
                key={blog.id} blog={blog}
                handleBookmark={handleBookmark}
                handleMarkAsRead={handleMarkAsRead}
                >

                </Blog>)
            }
            
        </div>
    );
};
Blogs.propTypes={
    handleBookmark:PropTypes.func, 
    handleMarkAsRead:PropTypes.func
}

export default Blogs;
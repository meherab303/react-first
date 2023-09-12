import {FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Blog = ({blog,handleBookmark}) => {
    const{title,post_date,cover,author_img,hashtag,reading_time}=blog
    return (
        <div>
            <img src={cover} alt="" />
         
            <div className='flex justify-between items-center'>
               <div className='flex justify-center items-center gap-3 my-3'>
               <img className='w-14 h-14' src={author_img} alt="" />
               <div>
               <p className='font-bold'>thomas shelby</p>
               <p>{post_date}</p>
               </div>
               </div>
                <div className='flex gap-2'>
                    <h3><span>{reading_time}</span> min ago</h3>
                    <button  onClick={()=>handleBookmark(blog)} className='text-sky-400'><FaBookmark></FaBookmark></button>
                   

                </div>

            
          </div>
          <h3 className='text-3xl my-3'>{title}</h3>
          <p>{
            hashtag.map((tag,idx)=><span key={idx} ><a className='font-thin text-gray-500 ' href="">#{tag}</a></span>)
          }</p>
         <div>
         <button className='text-blue-700 mb-3'>Mark as read</button>
         </div>
          
          
           
            
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleBookmark:PropTypes.func
    
    
  
}

export default Blog;
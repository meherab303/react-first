
import Header from './components/header/header'
import Blogs from './components/Header/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const[bookmarks,setBookmarks]=useState([])

  const handleBookmark=(blog)=>{
    console.log(blog)
    const newBookmarks=[...bookmarks,blog]
    setBookmarks(newBookmarks);
  }
  

  return (
    <div className='max-w-screen-xl mx-auto'>
      
     <Header></Header>
     <div className='md:flex'>
     <Blogs handleBookmark={handleBookmark}></Blogs>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
      
        
    </div>
  )
}

export default App


import Header from './components/header/header'
import Blogs from './components/Header/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const[bookmarks,setBookmarks]=useState([])
  const[readingTime,setReadingTime]=useState(0)

  const handleMarkAsRead=(time,id)=>{
    setReadingTime(readingTime+time)
    console.log('mark delete')
   const remainingBookMarks=bookmarks.filter(bookmark=>bookmark.id!==id)
    setBookmarks(remainingBookMarks)
  }

  const handleBookmark=(blog)=>{
    console.log(blog)
    const newBookmarks=[...bookmarks,blog]
    setBookmarks(newBookmarks);
  }
  

  return (
    <div className='max-w-screen-xl mx-auto'>
      
     <Header></Header>
     <div className='md:flex'>
     <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
      
        
    </div>
  )
}

export default App

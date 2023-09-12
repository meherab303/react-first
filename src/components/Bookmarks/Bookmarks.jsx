
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 ml-10 text-center my-2 text-4xl  ">
            <div className='bg-cyan-300 rounded-xl p-4 m-4'> Spent time on read:{readingTime}</div>
            <h3 className="bg-fuchsia-300 my-5 rounded-xl p-4 m-4">Bookmarks: {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array.isRequired,
    readingTime:PropTypes.number

}

export default Bookmarks;
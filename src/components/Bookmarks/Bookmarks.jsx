
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 ml-10 text-center my-5 text-4xl">
            <h3>Bookmarks: {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array.isRequired

}

export default Bookmarks;
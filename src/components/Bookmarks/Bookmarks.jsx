import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 mb-10">
      <div className="p-8 rounded-xl mx-5 md:ml-5 mb-5 text-[#6047EC] border-2 border-[#6047EC] bg-[rgba(96,71,236,0.1)]">
        <h3 className="text-xl font-bold">
          Spent time on read : {readingTime} min
        </h3>
      </div>

      <div className="bg-gray-200 p-8 rounded-xl mx-5 md:ml-5">
        <h2 className=" text-xl sm:text-3xl font-bold">
          Marked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;

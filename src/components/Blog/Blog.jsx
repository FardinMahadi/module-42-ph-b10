import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="sm:mb-14">
      <img
        className="w-full rounded-xl mb-8"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-8 sm:w-14"
            src={author_img}
            alt={`Author image of ${author}`}
          />
          <div className="ml-4">
            <h3 className="text-sm sm:text-base font-bold">{author}</h3>
            <p className="text-xs sm:text-base text-gray-600">{posted_date}</p>
          </div>
        </div>
        <div className="text-gray-600 flex items-center gap-1">
          <span className="text-sm sm:text-base">{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="text-2xl"
          >
            <CiBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-xl sm:text-4xl sm:leading-10">{title}</h2>
      <p className="my-3">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a
              href="#"
              className="my-4 text-gray-600 hover:underline hover:text-blue-700"
            >
              #{hash}{" "}
            </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => {
          handleMarkAsRead(blog.reading_time);
        }}
        className="text-purple-800 underline hover:text-black mb-5"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;

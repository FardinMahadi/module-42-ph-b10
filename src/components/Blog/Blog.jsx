import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmarks }) => {
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
    <div className="mb-14">
      <img
        className="w-full rounded-xl mb-8"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-14"
            src={author_img}
            alt={`Author image of ${author}`}
          />
          <div className="ml-4">
            <h3 className="font-bold">{author}</h3>
            <p className="text-gray-600">{posted_date}</p>
          </div>
        </div>
        <div className="text-gray-600 flex items-center gap-1">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="text-2xl"
          >
            <CiBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl leading-10">{title}</h2>
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
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func,
};

export default Blog;

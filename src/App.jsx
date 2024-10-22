import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  return (
    <>
      <Header />
      <main className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookmarks={handleAddToBookmarks} />
        <Bookmarks bookmarks={bookmarks} />
      </main>
    </>
  );
}

export default App;

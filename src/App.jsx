import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = (blog) => {
    console.log("bookmark adding soon");
  };
  return (
    <>
      <Header />
      <main className="md:flex max-w-7xl mx-auto">
        <Blogs />
        <Bookmarks handleAddToBookmarks={handleAddToBookmarks} />
      </main>
    </>
  );
}

export default App;

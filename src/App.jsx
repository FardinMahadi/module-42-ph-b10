import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="md:flex max-w-7xl mx-auto">
        <Blogs />
        <Bookmarks />
      </main>
    </>
  );
}

export default App;

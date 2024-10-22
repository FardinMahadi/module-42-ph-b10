import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="container flex justify-between items-center p-4 mx-auto border-b-2 mb-5">
      <h1 className=" text-lg sm:text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;

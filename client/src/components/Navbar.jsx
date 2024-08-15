import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigateTo = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("id");
    navigateTo("/");
  };

  const id = sessionStorage.getItem("id");

  return (
    <div className="sticky top-0 bg-black/90 flex items-center w-screen p-1 px-5 shadow-2xl shadow-black z-20 WBE">
      <div className="flex gap-4 w-1/2 items-center">
        <img src="/logo.webp" alt="GameZone" className="w-16" />
        <h1 className="text-2xl font-bold text-white">Game Zone X</h1>
      </div>
      <div className="flex justify-end gap-5 w-full ">
        {id ? (
          <>
            <>
              <Link to="/OrderPage">
                <h1 className="text-2xl font-bold text-white">OrderPage</h1>
              </Link>
              <h1 className="text-white text-2xl font-bold">|</h1>
              <button
                className="text-2xl font-bold text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          </>
        ) : (
          <>
            <Link to="/login">
              <h1 className="text-2xl font-bold text-white">Login</h1>
            </Link>
            <h1 className="text-white text-2xl font-bold">|</h1>
            <Link to="/signup">
              <h1 className="text-2xl font-bold text-white">Sign Up</h1>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

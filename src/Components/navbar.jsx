import { Link } from "react-router-dom";

const NavBar =()=> {
  return (
    <>
      <nav className="bg-slate-700 h-auto">
        <ul className="flex">
          <li className="mr-2">
            <Link className="text-center text-fuchsia-500 hover:text-fuchsia-800" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="mr-2">
            <Link className="text-center text-fuchsia-500 hover:text-fuchsia-800 " to="/products">
              Products
            </Link>
          </li>
          <li className="mr-2">
            <Link className="acttext-center text-fuchsia-500 hover:text-fuchsia-800" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;

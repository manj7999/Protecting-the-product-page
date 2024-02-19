import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/auth-context"; 

const Products = () => {
  const authCtx = useContext(AuthContext); // Access AuthContext
  const isLoggedIn = authCtx.isLoggedIn;
  const navigate = useNavigate(); // Import and use useNavigate hook

  if (!isLoggedIn) { // Redirect to login page if user is not logged in
    navigate("/auth");
    return null; // Prevent rendering the Products component
  }

  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">A Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;

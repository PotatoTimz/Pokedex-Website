import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="navbar">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <p id="title">Pokedex</p>
      </Link>
    </div>
  );
}

export default NavBar;

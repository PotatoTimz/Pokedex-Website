import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="NavBar">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <p id="Title">Pokedex</p>
      </Link>
    </div>
  );
}

export default NavBar;

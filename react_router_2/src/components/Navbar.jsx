import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <span>Poked Web</span>
        <div>
          <NavLink className={({isActive})=>isActive ? "active" : ""} to={"/"}>Home</NavLink>
          <NavLink to={"/pokemones"}>Pokemones</NavLink>
        </div>
    </nav>
  )
}

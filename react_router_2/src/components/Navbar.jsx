import { NavLink } from "react-router-dom";
import PokeLogo from '../assets/PokeLogo.png'

export default function Navbar() {
  return (
    <nav>
        <img src={PokeLogo} />
        <div>
          <NavLink className={({isActive})=>isActive ? "active" : ""} to={"/"}>Home</NavLink>
          <NavLink to={"/pokemones"}>Pokemones</NavLink>
        </div>
    </nav>
  )
}

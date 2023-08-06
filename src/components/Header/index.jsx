import { useRef, useState } from "react";
import * as C from "./styles";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
export default function Header() {
  const [changeBackground, setChangeBackground] = useState(false);
  const searchInput = useRef(null);

  window.onscroll = () => {
    if (!changeBackground && window.scrollY > 10) {
      setChangeBackground(true);
    } else if (changeBackground && window.scrollY <= 10) {
      setChangeBackground(false);
    }
  };

  const handleClick = () => {
    if (searchInput.current) {
      searchInput.current.focus();
    }
  };

  return (
    <C.Header changeBackground={changeBackground}>
      <nav>
        <C.Ul>
          <NavLink to="/">Filme</NavLink>

          <NavLink to="/movies">Series</NavLink>

          <NavLink to="series">Filmes +18</NavLink>
        </C.Ul>
      </nav>

      <C.DivInput onClick={handleClick}>
        <SearchIcon />
        <input type="text" placeholder="Search" ref={searchInput} />
      </C.DivInput>
    </C.Header>
  );
}

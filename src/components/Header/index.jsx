import { useRef } from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
export default function Header() {
  const searchInput = useRef(null);

  const handleClick = () => {
    if (searchInput.current) {
      searchInput.current.focus();
    }
  };

  return (
    <C.Header>
      <nav>
        <C.Ul>
          <li>
            <Link to="/">Filme</Link>
          </li>
          <li>
            <Link to="/movies">Series</Link>
          </li>
          <li>
            <Link to="series">Filmes +18</Link>
          </li>
        </C.Ul>
      </nav>

      <C.DivInput onClick={handleClick}>
        <SearchIcon />
        <input type="text" placeholder="Search" ref={searchInput} />
      </C.DivInput>
    </C.Header>
  );
}

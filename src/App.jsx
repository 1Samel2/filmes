import Search from "./components/SearchAppBar";
import GridFilmed from "./components/SpacingGrid";
import "./App.css";

function App() {
  return (
    <>
      <Search />
      <div>
        <h1>Site Filmes</h1>

        <GridFilmed />
      </div>
    </>
  );
}

export default App;

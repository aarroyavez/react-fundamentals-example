import Header from "./components/Header";
import {MovieList} from "./components/MovieList";

const latestMovies = [
  {name: "Avatar 2"},
  {name: "Matrix 4"},
  {name: "Thor"},
];

const childrenMovies = [
  {name: "Minions"},
  {name: "Toy Story"},
];

function App() {
  return (
    <div className="App">
    <Header />
    <MovieList list={latestMovies} />
    <MovieList list={childrenMovies} />
    </div>
  );
}

export default App

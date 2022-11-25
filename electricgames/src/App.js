import GameService from "./services/GameService";
import GameList from "./components/games/GameList";

function App() {
  GameService.getAllGames();

  return (
    <div>
      <h1>Games</h1>
      <GameList />
    </div>
  );
}

export default App;

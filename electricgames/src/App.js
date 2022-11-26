import GameService from "./services/GameService";
import GameList from "./components/games/GameList";

function App() {
  GameService.getAllGames();

  return (
    <div>
      <GameList />
    </div>
  );
}

export default App;

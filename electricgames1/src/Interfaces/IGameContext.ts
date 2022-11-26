import IGame from "./IGame";

interface IGameContext {
  games: IGame[];
  deleteGameById: (id: number) => void;
}

export default IGameContext;

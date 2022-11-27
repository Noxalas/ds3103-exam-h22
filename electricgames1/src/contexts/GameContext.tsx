import React from "react";
import { useEffect, useState, createContext, ReactNode } from "react";
import IGameContext from "../interfaces/IGameContext";
import IGame from "../interfaces/IGame";
import GameService from "../services/GameService";

export const GameContext = createContext<IGameContext | null>(null);

type Props = {
    children: ReactNode;
};

export const GameProvider = ({ children }: Props) =>
{
    const [games, setGames] = useState<IGame[]>([]);

    useEffect(() =>
    {
        getGamesFromService();
    }, []);

    const getGamesFromService = async () =>
    {
        const gamesFromService = await GameService.getAllGames();
        setGames(gamesFromService);
    };

    const deleteGameById = async (id: number) =>
    {
        await GameService.deleteGameById(id);
        const newArray = games.filter((Game) => Game.id !== id);
        setGames(newArray);
    };

    return <GameContext.Provider value={{ games, deleteGameById }}>{children}</GameContext.Provider>;
};
export default GameProvider;

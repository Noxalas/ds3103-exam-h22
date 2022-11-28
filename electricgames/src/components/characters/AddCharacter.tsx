import { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown, DropdownButton, InputGroup } from "react-bootstrap";
import IGame from "../../Interfaces/IGame";
import GameService from "../../services/GameService";
const endpoint = "http://localhost:5126/api/Character/Post/";

const GameOption = (game: IGame) =>
{
    return (
        <option key={game.id} value={game.id}>
            {game.title}
        </option>
    );
};

const AddCharacter = () =>
{
    const [games, setGames] = useState<any[]>([]);

    const [name, setName] = useState("");
    const [game, setGame] = useState("");

    useEffect(() =>
    {
        setgamesFromService();
    }, []);

    const setgamesFromService = async () =>
    {
        const gamesFromService = await GameService.getAllGames();
        setGames(gamesFromService);
        setGame(games[1]);
    };

    const handleSelected = (e: any) =>
    {
        const result = games.filter((key: any) => key.id == e)[0];
        console.log(result);
        setGame(result);
    };

    const handler = async (e: any) =>
    {
        e.preventDefault();

        try {
            const character = {
                name: name,
                game: game
            }
            console.log(character);

            const resp = await axios.post(endpoint + `${name}`, character);
            console.log(resp);
        } catch (error: any) { }
    };

    const getGameOptions = () =>
    {
        return games.map((g) => GameOption(g));
    };

    return (
        <section>
            <h2>post request</h2>
            <form className="form" onSubmit={handler}>
                <InputGroup className="mb-3">
                    <input type="text" className="form-input" id="title" value={name} onChange={(e) => setName(e.target.value)} />

                    <select name="game-select" onChange={(e) => handleSelected(e.target.value)}>
                        {getGameOptions()}
                    </select>
                </InputGroup>

                <button type="submit" className="btn btn-primary">
                    register
                </button>
            </form>
        </section>
    );
};
export default AddCharacter;

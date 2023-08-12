import { useEffect, useState } from "react";
import GamesService from "../services/games-service";
import "../css/games-app.css";
import GamesFilter from "./GamesFilter";
import GameCard from "./GameCard"

const gamesService = new GamesService("http://localhost:3000");

export default function GamesList() {
    const [games, setGames] = useState([]);
    const [allGames, setAllGames] = useState([]);
    const [genres, setGenres] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(()=>{
        gamesService.getGames()
        .then(gamesJsonData=>{
            setGames(gamesJsonData);
            setAllGames(gamesJsonData);
            setGenres(getUniqueGenresList(gamesJsonData));
            setPlatforms(getUniquePlatformsList(gamesJsonData));
            setErrorMessage(null);
        })
        .catch(error=>{
            setErrorMessage("Sorry, unable to connect to server. Please try again later!");
        })
    }, 
    []);

    const getUniqueGenresList = function (games) {
        const allGenresList = games.map(game=>game.genre); 
        const uniqueGenresList = [...new Set(allGenresList)];
        return uniqueGenresList;
    }

    const getUniquePlatformsList = function (games) {
        const allPlatformsList = games.map(game=>game.platform); 
        const uniquePlatformsList = [...new Set(allPlatformsList)];
        return uniquePlatformsList;
    }

    const applyFilters = function (title, genre, platform) {
        console.log('apply filters', title, genre);
        let filteredGames = allGames.filter(game => 
            (title == "" || game.title.toLowerCase().includes(title.toLowerCase())) &&
            (genre == "" || game.genre.includes(genre)) &&
            (platform == "" || game.platform.includes(platform))
        );
        console.log(filteredGames);
        setGames(filteredGames);
    }

    return (
    <>
        {errorMessage && <h3>{errorMessage}</h3>}
        {!errorMessage && 
            <GamesFilter 
                genres = {genres}
                platforms={platforms}
                onFilterChange={applyFilters}
            >
            </GamesFilter>
        }
        <div className="games-list-container">
            {games.map(game => <GameCard key={game.id} game={game}/>)}
        </div>
    </>
    );
}
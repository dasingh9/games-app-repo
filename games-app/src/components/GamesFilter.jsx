import { useRef, useState } from "react";
export default function GamesFilter({ genres, platforms, onFilterChange }) {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [platform, setPlatform] = useState("");

    const titleRef = useRef();
    const genreRef = useRef();
    const platformRef = useRef();

    function handleTitleSearch(e) {
        const titleText = e.target.value;
        setTitle(titleText);
        applyFilters();
    }

    function handleGenreChange(e) {
        const selectedGenre = e.target.value;
        setGenre(selectedGenre);
        applyFilters();
    }

    function handlePlatformChange(e) {
        const selectedPlatform = e.target.value;
        setGenre(selectedPlatform);
        applyFilters();
    }

    function applyFilters() {
        let title = titleRef.current.value;
        let genre = genreRef.current.value
        let platform = platformRef.current.value;
        onFilterChange(title, genre, platform);
    }

    function resetFilterControls() {
        setTitle("");
        setGenre("");
        setPlatform("");
        titleRef.current.value = "";
        genreRef.current.value = "";
        platformRef.current.value = "";
    }

    function resetFilters() {
        resetFilterControls();
        applyFilters();
    }

    return (
        <>
            <div className="search-bar">
                {/*Search input box*/}
                <input type="text" ref={titleRef}
                    className="games-search-box"
                    value={title}
                    onChange={(e) => { handleTitleSearch(e) }}
                    placeholder="Enter a title">
                </input>

                {/*Reset filters button*/}
                <button
                    className="btn btn-secondary"
                    style={{ marginLeft: "20px" }}
                    onClick={() => { resetFilters() }}
                >Reset Filters</button>
            </div>

            <div className="filters-bar">
                <span>Filters:</span>

                {/*Genre dropdown list*/}
                <select ref={genreRef}
                    onChange={(e) => { handleGenreChange(e) }}
                    className="genre-dropdown"
                >
                    <option value="">All Genres</option>
                    {genres.map(genre => (<option value={genre}>{genre}</option>))}
                </select>

                <span style={{ marginLeft: "40px" }}></span>

                {/*Platform dropdown list*/}
                <select ref={platformRef} 
                    onChange={(e) => { handlePlatformChange(e) }}
                    className="platform-dropdown"
                >
                    <option value="">All platforms</option>
                    {platforms.map(platform => (<option value={platform}>{platform}</option>))}
                </select>
            </div>
        </>
    );
}
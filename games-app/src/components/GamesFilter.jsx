import { useRef, useState } from "react";
export default function GamesFilter({ genres, publishers, onFilterChange }) {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [publisher, setPublisher] = useState("");

    const titleRef = useRef();
    const genreRef = useRef();
    const publisherRef = useRef();

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

    function handlePublisherChange(e) {
        const selectedPublisher = e.target.value;
        setGenre(selectedPublisher);
        applyFilters();
    }

    function applyFilters() {
        let title = titleRef.current.value;
        let genre = genreRef.current.value
        let publisher = publisherRef.current.value;
        onFilterChange(title, genre, publisher);
        //console.log('applyFilters', titleRef.current.value, genreRef.current.value);
    }

    function resetFilterControls() {
        setTitle("");
        setGenre("");
        setPublisher("");
        titleRef.current.value = "";
        genreRef.current.value = "";
        publisherRef.current.value = "";
    }

    function removeFilters() {
        resetFilterControls();
        applyFilters();
    }

    let genreOptionsJsx = genres.map(genre => {
        return (
            <option value={genre}>{genre}</option>
        )
    });
    genreOptionsJsx.unshift(<option value="">All Genres</option>)

    let publisherOptionsJsx = publishers.map(publisher => {
        return (
            <option value={publisher}>{publisher}</option>
        )
    });
    publisherOptionsJsx.unshift(<option value="">All Publishers</option>)

    return (
        <>
            <div>
                <input type="text" ref={titleRef}
                    className="games-search-box"
                    value={title}
                    onChange={(e) => { handleTitleSearch(e) }}
                    placeholder="Enter a title">
                </input>
                <button onClick={() => { removeFilters() }}>Remove Filters</button>
            </div>
            <div>
                Filters:
                <select ref={genreRef}
                    onChange={(e) => { handleGenreChange(e) }}
                >
                    {genreOptionsJsx}
                </select> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select ref={publisherRef}
                    onChange={(e) => { handlePublisherChange(e) }}
                >
                    {publisherOptionsJsx}
                </select>
            </div>
        </>
    );
}
export default function GameCard({game}) {

    function getPlatformIcon(platform) {
        if(platform.includes("Windows"))
            return "W";
        if(platform.includes("Andoid"))
            return "A";
        if(platform.includes("Browser"))
            return "B";
        return "#";
    }

    return (
        <div key={game.id} className="game-card card grow mb-3 shadow h-md-250 video-card">
            <div className="card-body">
                <div className="row">
                    <div className="col-3 align-self-center mt-n2">
                        <div className="card">
                            <div className="image-wrapper">
                                <img className="card-img-top" src={game.thumbnail} alt={game.short_description} />
                            </div>
                        </div>
                    </div>
                    <div className="col-7 col-sm-6 col-lg-7 align-self-center justify-content-center position-static">
                        <a href="#" className="stretched-link no-underline">
                            <h4 className="card-title text-truncate mt-n2 mb-1">{game.title}</h4>
                        </a>
                        <div className="text-truncate text-muted mb-1">{game.short_description}</div>
                        <span className="badge badge-secondary text-dark mr-2">{game.genre}</span>
                    </div>
                    <div className="col-1 align-self-center text-center text-muted justify-content-center d-none d-sm-block">
                        <h5><i className="fab fa-windows">{getPlatformIcon(game.platform)}</i></h5>
                    </div>
                    <div className="col-1 justify-content-center text-center align-self-center">
                        <span className="badge badge-ftg py-2 px-2 mb-2">FREE</span>
                    </div>
                </div>
            </div>
        </div>
    );
} 
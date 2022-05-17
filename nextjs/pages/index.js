import { useEffect, useState } from "react";
import Seo from "../component/Seo";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

export default function Home(){

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        (async () => {
            const { results } = await (
                await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
                )
            ).json();
            setMovies(results);
        })();
    }, []);

    return (
        <div>
            <Seo title="Home" />
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
                <div className="movie" key={movie.id}>
                    <div className="cont">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        <h4>{movie.original_title}</h4>
                    </div>
                </div>
            ))}
            <style jsx>{`
            .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
            }
            .movie {
                width: 50%;
                display: inline-block;
            }
            .cont {
                width:80%;
                margin: 0 auto;
                position: relative;
                min-height: 820px;
            }
            .movie img {
            position: absolute;
            top: 3%;
            left: 50%;
            transform: translate(-50%, 0);
            max-width: 100%;
            border-radius: 12px;
            border: 1px solid #ccc;
            cursor: pointer;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
            .movie:hover img {
            }
            .movie h4 {
            font-size: 21px;
            text-align: center;
            position: absolute;
            bottom: 5%;
            left: 50%;
            transform: translate(-50%, 0);
            }
            `}</style>
        </div>
    );
}
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDirs} from "../axios/videoList.ts";
import MovieItem from "./MovieItem.tsx";



const MovieBoard = () => {
    const navigate = useNavigate();
    // const defaultLoc = HLS_URL + "/prometheus-grafana/hls/1/output.m3u8";
    const [dirList, setDirList] = useState([]);


    useEffect(() => {
        getDirs().then(data => {
            if (data != null) {
                setDirList(data.data)
            }
        })
    }, [])

    const handleMovieClick = (movie: { movie:string }) => {
        navigate('/movie', {state: {movie: {movie}}});
    };

    return (
        <>
            <>
                {dirList.map((movie) => (
                    <div>
                        <MovieItem onClick={() => handleMovieClick(movie)} title={movie} image={"test.png"}></MovieItem>

                    </div>
                ))}
            </>

        </>
    )
}

export default MovieBoard;
import './App.css'
import {useEffect, useState} from "react";
import {getDirs} from "./axios/videoList.ts";
import {useNavigate} from "react-router-dom";


function App() {

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
            <b>dirs</b>
            {dirList.map((movie) => (
                <div>
                    <a onClick={() => handleMovieClick(movie)} key={movie}>
                        {movie}
                    </a>
                </div>
            ))}
        </>
    )
}

export default App

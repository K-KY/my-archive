import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDir} from "../axios/videoList.ts";
import VideoPart from "./VideoPart.tsx";
import HlsPlayer from "./HlsPlayer.tsx";
import {HLS_URL} from "../constants.ts";
import "./MovieDetail.css"

interface MovieDetailProps {
    movie: string;
}

export interface MoviePart {
    name: string;
}

const MovieDetail = () => {
    const location = useLocation();
    const [parts, setParts] = useState<MoviePart[]>()
    const movie: MovieDetailProps = location.state?.movie;


    const [currentPart, setCurrentPart] = useState<MoviePart | null>(parts?.[0] || null);
    useEffect(() => {
        const fetchParts = async (): Promise<void> => {
            try {
                const res = await getDir(movie.movie);
                if (res?.data) {
                    const partObjects: MoviePart[] = res.data.map((item: string): MoviePart => ({
                        name: item
                    }));

                    setParts(partObjects);
                }
            } catch (error) {
                console.error('Error fetching parts:', error);
            }
        };

        fetchParts();
    }, [movie.movie]);


    useEffect(() => {
        console.log("currentPart changed", currentPart);
    }, [currentPart]);


    return (
        <>
            <p>{movie.movie}</p>


            <div style={{display: "flex", flexDirection: "row", height: "100%"}}>

                {currentPart &&
                    <div style={{padding: 16, width: "100%"}}>
                        <HlsPlayer
                            key={currentPart.name}
                            src={`${HLS_URL}/${movie.movie}/hls/${currentPart.name}/output.m3u8`} // nginx 등에서 서빙 중인 m3u8 경로
                            autoPlay
                            controls
                            muted
                        />
                    </div>
                }

                <div className={"part-side"}>
                    {parts?.map((part, index) => (
                        <div key={index} style={{ display: "flex", justifyContent: "flex-end" }}>
                            <VideoPart
                                onClick={() => setCurrentPart(part)}
                                part={part}
                            />
                        </div>
                    ))}
                </div>
            </div>




        </>
    )
}
export default MovieDetail;
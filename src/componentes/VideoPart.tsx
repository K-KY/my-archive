import type {MoviePart} from "./MovieDetail.tsx";
import "./VideoPart.css"
interface VideoPartProps {
    part: MoviePart,
    onClick: (value: (((prevState: MoviePart) => MoviePart) | MoviePart)) => void
}


const VideoPart = (partInfo: VideoPartProps) => {

    console.log(partInfo)
    return (
        <>
            <div className={"part-container"}>
                <button onClick={() => partInfo.onClick(partInfo.part)}>
                    <a>
                        {partInfo.part.name}
                    </a>
                </button>

            </div>
        </>
    )
}

export default VideoPart;
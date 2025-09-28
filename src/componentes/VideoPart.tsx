import type {MoviePart} from "./MovieDetail.tsx";

interface VideoPartProps {
    part: MoviePart,
    onClick: (value: (((prevState: MoviePart) => MoviePart) | MoviePart)) => void
}


const VideoPart = (partInfo: VideoPartProps) => {

    console.log(partInfo)
    return (
        <>
            <div>
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
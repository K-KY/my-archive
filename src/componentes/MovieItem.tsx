import CardView from "./cardview/CardView.tsx";

interface MovieItemProps {
    title: string,
    image: string,
    onClick?: () => void
}

const MovieItem = (prop: MovieItemProps) => {
    return (
        <div onClick={prop.onClick}>
            <CardView image={prop.image} title={prop.title}></CardView>
        </div>
    )
}

export default MovieItem;
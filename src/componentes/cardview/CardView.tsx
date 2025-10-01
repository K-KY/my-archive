import "./CardView.css"


interface CardViewProps {
    title: string;
    image: string;
}

const CardView = (prop:CardViewProps) => {
    return (
        <div className="card">
            <div>
                <ImageViewer img={prop.image}></ImageViewer>
            </div>

            <div className={"card-title"}>
                <div>
                    <p>{prop.title}</p>
                </div>
            </div>
        </div>
    )
}

const ImageViewer = ({img}:{img:string}) => {
    return (
        <div>
            <div>
                <img src={img} alt=""/>
            </div>
        </div>
    )
}

export default CardView;
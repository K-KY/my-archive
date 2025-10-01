import './App.css'
import MovieBoard from "./componentes/MovieBoard.tsx";
import Header from "./componentes/header/Header.tsx";
import Search from "./componentes/serch/Search.tsx";

function App() {

    return (
        <>
            <Header />
            <Search></Search>
            <MovieBoard></MovieBoard>


        </>
    )
}

export default App

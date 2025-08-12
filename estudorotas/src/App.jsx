import{BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import MinasGerais from "./Paginas/MinasGerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import RioDeJaneiro from "./Paginas/RioDeJaneiro";
import SantaCatarina from "./Paginas/SantaCatarina";
import Parana from "./Paginas/Parana";
import Acre from "./Paginas/Acre";
import Alagoas from "./Paginas/Alagoas";

export default function App()
{
    return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/sp" element={<SaoPaulo/>}/>
        <Route path="/mg" element={<MinasGerais/>}/>
        <Route path="/es" element={<EspiritoSanto/>}/>
        <Route path="/rj" element={<RioDeJaneiro/>}/>
        <Route path="/sc" element={<SantaCatarina/>}/>
        <Route path="/pr" element={<Parana/>}/>
        <Route path="/ac" element={<Acre/>}/>
        <Route path="/al" element={<Aalagoas/>}/>
    </Routes>
    </BrowserRouter> 
    );
}
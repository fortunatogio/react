import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Atividade01 from "./Atividade01";
import Atividade02 from "./Atividade02";


export default function MinhasRotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/atividade01" element={<Atividade01 />}/> 
            <Route path="/atividade02" element={<Atividade02 />}/> 
        </Routes>
        </BrowserRouter>
    );
}
import { Routes, Route } from "react-router-dom";

import { Recomendacoes } from "../pages/Recomendacoes";
import { MeusCards } from "../pages/MeusCards";
import { ModalCard } from "../pages/ModalCard";

export function AuthRoutes() {
    return(
        <Routes>
            <Route path="/Recomendacoes" element={<Recomendacoes />}/>
            <Route path="/" element={<MeusCards state="default"/>}/>
            <Route path="/login" element={<ModalCard action="login" />} />
            <Route path="/signup" element={<ModalCard action="signup" />} />
        </Routes>
    )
}
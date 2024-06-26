import { Routes, Route } from "react-router-dom";

import { Recomendacoes } from "../pages/Recomendacoes";
import { MeusCards } from "../pages/MeusCards";
import { ModalCard } from "../pages/ModalCard";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/Recomendacoes" element={<Recomendacoes />}/>
            <Route path="/" element={<MeusCards />}/>
            <Route path="/new" element={<ModalCard action="new" />} />
            <Route path="/edit/:id" element={<ModalCard action="edit" />} />
            <Route path="/delete/:id" element={<ModalCard action="delete" />} />
        </Routes>
    )
}
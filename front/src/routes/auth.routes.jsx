import { Routes, Route } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { Introducao } from "../pages/Introducao";

import { Recomendacoes } from "../pages/Recomendacoes";
import { MeusCards } from "../pages/MeusCards";
import { ModalCard } from "../pages/ModalCard";

export function AuthRoutes() {
    const { secondAccess } = useAuth();

    return(
        secondAccess ? 
            <Routes>
                <Route path="/Recomendacoes" element={<Recomendacoes />}/>
                <Route path="/" element={<MeusCards state="default"/>}/>
                <Route path="/login" element={<ModalCard action="login" />} />
                <Route path="/signup" element={<ModalCard action="signup" />} />
            </Routes>  
            : 
            <Routes>
                <Route path="/" element={<Introducao />}/>
            </Routes>
    )
}
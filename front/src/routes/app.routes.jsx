import { Routes, Route } from "react-router-dom";

import { MeusCards } from "../pages/MeusCards";
import { ModalCard } from "../pages/ModalCard";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<MeusCards />}/>
            <Route path="/:action?/:id?" element={<ModalCard />} />
        </Routes>
    )
}
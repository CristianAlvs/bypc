import { Routes, Route } from "react-router-dom";

import { MeusCards } from "../pages/MeusCards";
import { NewCard } from "../pages/NewCard";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<MeusCards />}/>
            <Route path="/new" element={<NewCard />}/>
        </Routes>
    )
}
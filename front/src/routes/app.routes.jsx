import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { NewCard } from "../pages/NewCard";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/new" element={<NewCard />}/>
        </Routes>
    )
}
import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";

export function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
        </div>
    );
}
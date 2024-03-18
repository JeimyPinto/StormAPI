import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";
import { Register } from "./components/Register.jsx";

export function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </div>
    );
}
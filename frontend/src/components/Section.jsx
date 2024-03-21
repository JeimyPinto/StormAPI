import { LoginSection } from "./LoginSection"
import { RegisterSection } from "./RegisterSection"
import { Link } from 'react-router-dom';

export function Section() {
    const parrafo = "El proyecto del 'Prototipo de georreferenciación de rutas de transporte privado para la ciudad de Manizales' tiene como objetivo principal mejorar la seguridad y la eficiencia del transporte escolar privado, brindando a los padres y tutores la capacidad de rastrear en tiempo real la ubicación de sus hijos mientras viajan hacia y desde la escuela en vehículos de transporte escolar privado";
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-center">
                <RegisterSection/>
                <LoginSection/>
            </div>
            <div className="bg-teal-400 w-full flex flex-col items-center p-4">
                <p className="w-4/6 indent-8 text-center m-3">
                    {parrafo}
                </p>
                <Link to="/register">
                    <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold rounded p-3 px-8">Registrate</button>
                </Link>
            </div>
        </div>
    )
}
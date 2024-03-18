import { Button } from "./Button.jsx"
import { LoginSection } from "./LoginSection"
import { RegisterSection } from "./RegisterSection"

export function Section() {
    const parrafo = "El proyecto del 'Prototipo de georreferenciación de rutas de transporte privado para la ciudad de Manizales' tiene como objetivo principal mejorar la seguridad y la eficiencia del transporte escolar privado, brindando a los padres y tutores la capacidad de rastrear en tiempo real la ubicación de sus hijos mientras viajan hacia y desde la escuela en vehículos de transporte escolar privado";
    return (
        <>
            <div className="flex">
                <RegisterSection />
                <LoginSection />
            </div>
            <div className="bg-teal-400 w-full flex flex-col items-center p-4">
                <p className="w-4/6 indent-8 text-center m-3">
                    {parrafo}
                </p>
                <Button text="Ver más" />
            </div>
        </>
    )
}
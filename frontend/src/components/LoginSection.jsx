import { Button } from './Button';
import { Link } from 'react-router-dom';

export function LoginSection() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full container mx-auto">
            <h2 className="text-2xl font-bold mb-4 p-10">Iniciar sesión</h2>
            <form className="w-2/3  bg-zinc-600/60 p-12 rounded-md text-sm">
                <div className="mb-4">
                    <label htmlFor="email" className="m-2 text-xl">Correo electrónico</label>
                    <input type="text" id="email" className="w-full border border-gray-300 rounded  placeholder:italic placeholder:text-slate-400 p-2" />
                </div>
                <div className="mb-4 ">
                    <label htmlFor="password" className="m-2 text-xl">Contraseña</label>
                    <input type="password" id="password" className="w-full border border-gray-300 rounded  placeholder:italic placeholder:text-slate-400 p-2" />
                </div>
                <div className="mb-4  text-right">
                    <a href="#" className="text-orange-600">¿Olvidaste tu contraseña?</a>
                </div>
                <Link to="/Dashboard" className="flex flex-col">
                        <Button text="Iniciar sesión" />
                </Link>
            </form>
        </div>
    );
}


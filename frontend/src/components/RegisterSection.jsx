import { Link } from 'react-router-dom';
import imgCell from '../assets/cell-img.png';

export function RegisterSection() {
    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-sky-500 w-full">
            <h1 className="text-4xl font-bold mb-4">Storm GPS</h1>
            <img src={imgCell} alt="" className='w-72' />
            <h2 className="text-lg text-stone-900 mb-8"><strong>Seguridad</strong> en cada viaje de sus hijos</h2>
            <Link to="/register">
                <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold rounded p-3 px-8">Registrate</button>
            </Link>
        </div>
    );
}


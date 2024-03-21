import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export function Logo() {
    return (
        <Link to="/" className="flex justify-start mx-12 my-2 items-center gap-3">
            <img src={logo} alt="Logo" className="w-8" />
            <strong className="text-cyan-500">STORM </strong>
            <strong className="text-blue-700">GPS</strong>
        </Link>
    )
}
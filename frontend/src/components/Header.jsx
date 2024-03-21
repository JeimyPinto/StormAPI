import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import PropTypes from 'prop-types';

export function Header({ children }) {
    return (
        <div className="flex flex-row bg-slate-800/20 justify-between items-center">
            <Logo/>
            <div className="flex flex-row gap-5 justify-end cursor-pointer items-center px-5">
                <Link to="/">Inicio</Link>
                <Link to="/capturas">Capturas</Link>
                <div href="">Precio</div>
                <div href="">Contacto</div>
                {children}
            </div>
        </div>
    );
}

Header.propTypes = {
    children: PropTypes.node.isRequired,
};

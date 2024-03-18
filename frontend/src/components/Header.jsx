import { Logo } from "./Logo";
import PropTypes from 'prop-types';

export function Header({ children }) {
    return (
        <div className="flex flex-row bg-slate-800/20 justify-around items-center">
            <Logo/>
            <div className="flex flex-row gap-5 justify-end cursor-pointer items-center">
                <strong href="">Inicio</strong>
                <div href="">Capturas</div>
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

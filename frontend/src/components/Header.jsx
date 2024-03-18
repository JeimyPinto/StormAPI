import { Logo } from "./Logo";

export function Header() {
    return (
        <div className="flex flex-row bg-slate-800/20 justify-around items-center">
            <Logo/>
            <div className="flex flex-row gap-5 justify-end cursor-pointer">
                <strong href="">Inicio</strong>
                <div href="">Capturas</div>
                <div href="">Precio</div>
                <div href="">Contacto</div>
            </div>
        </div>
    );
}
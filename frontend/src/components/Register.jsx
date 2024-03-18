import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export function Register() {
    return (
        <>
            <Header className="flex flex-row">
                <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold rounded p-4">Iniciar Sesión</button>
            </Header>
            <div className="flex flex-col w-full items-center text-center py-12">
                <h1 className="text-2xl font-bold">Inicia sesión o crea una cuenta</h1>
                <div action="" className="flex flex-col w-3/5 items-center my-3 mx-8 p-10 border-double border-4 border-gray-500/8">
                    <label htmlFor="" className="align-start m-1 text-start">Dirección de correo electrónico</label>
                    <input type="email" placeholder="Escribe tu correo electrónico" className="w-8/12 mb-5 px-10 border text-center border-sky-500" />
                    <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold rounded p-4">Iniciar Sesión</button>
                </div>
                <div className="flex flex-col">Al iniciar sesión o crear una cuenta, aceptas nuestros:
                    <Link to='/terminosCondiciones' className="underline decoration-1">Términos y condiciones</Link>
                    <Link to="/declaracionPrivacidad" className="underline decoration-1">Declaración de privacidad</Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
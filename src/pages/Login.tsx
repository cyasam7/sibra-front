import { useState } from "react";
import { useAuth } from "../context/Auth";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const Auth = useAuth() as any;
    const navigate = useNavigate();
    const [usuario, setusuario] = useState("");
    const [password, setpassword] = useState("");

    const handleIniciarSesion = (): void => {
        if (password === "" || usuario === "") {
            Swal.fire({
                icon: "error",
                text: "Campos vacios",
            });
            return;
        }
        Auth.LogIn(usuario, password)
            .then(() => navigate("/admin/propiedades"))
            .catch((err: any) => {
                const message = err?.response.data.message;
                if (message === "Unauthorized") {
                    Swal.fire({
                        icon: "info",
                        text: "Correo y contraseña incorrectos.",
                    });
                }
            });
    };
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        {/* <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        /> */}
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Inicia sesion
                        </h2>
                    </div>
                    <div className="mt-8 space-y-6">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    onChange={(e) => setusuario(e.target.value)}
                                    value={usuario}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    onChange={(e) => setpassword(e.target.value)}
                                    value={password}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            onClick={handleIniciarSesion}
                        >
                            Iniciar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

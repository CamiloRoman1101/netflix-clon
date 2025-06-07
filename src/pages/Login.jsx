import React from "react";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Iniciar sesión</h2>
        <form className="bg-gray-800 p-6 rounded-lg w full max-w-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Correo Electronico
            </label>
            <input
              type="email"
              id="email"
              placeholder="ejemplo@dominio.com"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="passworrd"
              className="block text-sm font-medium mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            ></input>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 py-2 rounded font-bold text-white transition duration-200 cursor-pointer"
          >
            Iniciar Sesión
          </button>
          <p className="text-sm text-center mt-4">
            ¿No tienes una cuenta?
            <a
              href="/register"
              className="text-red-500 hover:text-red-400 font-semibold"
            >
              {" "}
              Regístrate aquí
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

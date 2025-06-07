import React from "react";

const Register = () => {
  return (
    <div className=" min-h-screen flex item-center justify-center bg-black text-white pt-16">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Regístrate</h2>
        <form className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="text-sm font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              placeholder="Nombre"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            ></input>
          </div>
          <div className="mb-4">
            <label htmlFor="last-name" className="text-sm font-medium mb-2">
              Apellido
            </label>
            <input
              type="text"
              id="last-name"
              placeholder="Apellido"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            ></input>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm font-medium mb-2">
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
            <label htmlFor="password" className="text-sm font-medium mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            ></input>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-sm font-medium mb-2">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="********"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            ></input>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 rounded hover:bg-red-700 py-2 font-bold text-white transition duration-200 cursor-pointer"
          >
            Registro
          </button>
          <p className="text-sm  text-center mt-4">
            ¿Ya tienes cuenta?
            <a
              href="/login"
              className="text-red-500 hover:text-red-400 font-semibold"
            >
              {" "}
              Inicia sesión
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

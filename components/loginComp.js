import axios from "axios";
import { useState, useEffect } from "react";
import Image from 'next/image'
import loginService from "../services/loginService";
import { useRouter } from "next/router";
import verify from "../services/verifyToken";
import Navbar from "./navbar";
import Footer from "./footer";

export default function LoginComp() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const [alerta, setAlerta] = useState(false)
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      //Recupero el token
      const data = await loginService(credentials)
      //Almaceno el token en el localStorage
      window.localStorage.setItem("loggedUserToken", data.token);
      window.localStorage.setItem("loggedUsername", data.usuario);
    //Blanqueo el usuario y la contraseña
    setCredentials({
      username: "",
      password: "",
    });
    router.push("/miscontactos")
    } catch (error) {
      setAlerta(true)
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-base-200 flex">
        <div className="card card-side mx-auto my-1 bg-base-100 self-center shadow-xl max-w-md">
          <div className="card-body">
            <h1 className="card-title italic uppercase font-bold text-xl self-center">Inicio de sesión</h1>
            <div className="divider my-0 h-0.5 bg-violet-800"></div>
          <img src="/login.svg" alt="Login ilustration" className="w-full shadow-2xl"/>
          {
                alerta === true ? <div className="alert alert-warning shadow-lg"><div><svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg><span>¡Usuario y/o contraseña incorrectos!</span>
                </div>
              </div> : <></>
              }
            <form onSubmit={handleLogin}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold italic">
                    Usuario
                  </span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Introduzca su usuario"
                  value={credentials.username}
                  required={true}
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-sm"
                ></input>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold italic">
                    Contraseña
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Introduzca su clave"
                  value={credentials.password}
                  required={true}
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-sm"
                ></input>
              </div>
              <button className="btn btn transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-violet-700 to-violet-900 hover:from-violet-600 hover:to-violet-800 mt-3" type="submit">
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

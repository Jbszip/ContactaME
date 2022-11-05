import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import signupService from "../services/signupService";
import Footer from "./footer";
import Navbar from "./navbar";

export default function SignupComp() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    checkPass: "",
    phoneNum: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleView = (e) => {
    let visibility = document.getElementById("password");
    visibility.type == "password"
      ? (visibility.type = "text")
      : (visibility.type = "password");
  };

  const [alerta, setAlerta] = useState(false)
  const [exito, setExito] = useState(false)
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const data = await signupService(credentials);
      setCredentials({
      username: "",
      email: "",
      password: "",
      checkPass: "",
      phoneNum: "",
    });
    setExito(true)
    setTimeout(()=>{
      router.push("/login");
    }, 3500)
    
    } catch (error) {
      setAlerta(error.response.data)
    }
    
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-base-200 flex">
        <div className="card w-3/4 bg-base-100 shadow-xl mx-auto my-1 self-center max-w-md">
          <div className="card-body">
            <h2 className="card-title font-bold uppercase self-center ">
              Formulario de registro
            </h2>
            <p className="self-center italic">Completa todos los campos.</p>
            {
              exito ? <div className="alert alert-success shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>¡Te has registrado con éxito!</span>
              </div>
            </div> : <></>
            }
            <div className="divider my-0"></div>
            <form onSubmit={handleSignup} className="flex flex-col">
              <label className="label">
                <span className="label-text font-semibold italic">Usuario</span>
              </label>
              <input
                type="text"
                name="username"
                value={credentials.username}
                required={true}
                onChange={handleChange}
                placeholder="Nombre de usuario"
                className="input input-bordered w-full max-w-sm"
              />
              <label className="label">
                <span className="label-text font-semibold italic">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                required={true}
                onChange={handleChange}
                placeholder="Ingrese su email"
                className="input input-bordered w-full max-w-sm"
              />
              <label className="label">
                <span className="label-text font-semibold italic">
                  Contraseña
                </span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={credentials.password}
                required={true}
                onChange={handleChange}
                placeholder="Ingrese una clave"
                className="input input-bordered w-full max-w-sm"
              />
              <label className="label w-20">
                <span className="label-text text-xs">Mostrar clave</span>
                <input
                  type="checkbox"
                  onChange={handleView}
                  className="checkbox checkbox-sm checkbox-primary"
                />
              </label>
              <label className="label">
                <span className="label-text font-semibold italic">
                  Confirmar contraseña
                </span>
              </label>
              <input
                  type="password"
                  name="checkPass"
                  id="checkPass"
                  value={credentials.checkPass}
                  required={true}
                  onChange={handleChange}
                  placeholder="Repita la clave"
                  className="input input-bordered w-full max-w-sm"
                />
              <label className="label">
                <span className="label-text font-semibold italic">
                  Teléfono
                </span>
              </label>
              <input
                type="number"
                name="phoneNum"
                value={credentials.phoneNum}
                required={false}
                onChange={handleChange}
                placeholder="Ingrese su número de telefono"
                className="input input-bordered w-full max-w-sm"
              />
              <div>
              {
                alerta ? <div className="alert alert-error shadow-lg mt-2"><div><svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>{alerta}</span>
                </div>
              </div> : <></>
              }
                <button
                  className="btn mt-4 justify-end transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-violet-700 to-violet-900 hover:from-violet-600 hover:to-violet-800"
                  type="submit"
                >
                  Registrarme
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

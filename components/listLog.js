import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import getContacts from "../services/getAllContacts"
import deleteContact from "../services/deleteContact"
import Verify from "../services/verifyToken"
import createContactService from "../services/createContactService"


export default function ListLog({ usuario, token }) {
  const [lista, setLista] = useState([]);
  useEffect(() => {
    getContacts(usuario)
      .then(initialLista => {
        setLista(initialLista)
      })
  }, [])

  //Individual
  const deleteButton = async (e) => { 
    const toDelete = e.target.name
    const usuario = e.target.value
    e.preventDefault();
    const respuesta = await deleteContact(toDelete);
    if ((respuesta === "Delete exitoso")) {
      alert("Contacto eliminado con éxito");
      getContacts(usuario).then(initialLista => {
        setLista(initialLista)
      })
    } else {
      alert("Error al eliminar el contacto");
    }
  };

  //Creator
  const [alerta, setAlerta] = useState(false)
  const [contact, setContact] = useState({
    name: '',
    email:'',
    phoneNum:'',
    description:'',
    birthday:'',
    linkedin:''

  })
  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const router = useRouter();
  const config = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const logeado = await Verify(token);
    if (logeado.data === "Token Invalido") {
      window.localStorage.clear();
      window.alert("Credenciales inválidas, vuelva a iniciar sesión");
      router.push("/login");
    } else {
      //Creamos el contacto
      try {
        await createContactService(contact, config)
        setLista([...lista, contact])
      } catch (error) {
        setAlerta(true)
      }
    }
  }


  return (
    <>
      
      <main className="hero min-h-screen bg-base-200">
        <div className="container w-full md:w-3/4 mx-auto text-center bg-base-100 my-10 py-6 lg:px-16">
          <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl">
            Lista de {usuario}
          </h1>
          {!lista[0] ? (
            <h2>Aún no tienes contactos registrados</h2>
          ) : (
            lista.map((item) => {
              return (
                <>
                  <div className="flex flex-col gap-6 mt-6 mx-auto">
                    <div className="flex flex-col lg:flex-row px-2 py-4 transition-colors duration-300 transform border cursor-pointer rounded-xl bg-gradient-to-r hover:border-transparent group hover:from-violet-600 hover:to-violet-800">
                      <img
                        className="object-cover mx-auto self-center w-8 h-8 rounded-full lg:mx-4"
                        src="/user.svg"
                        alt="IMG de perfil"
                      />
                      <p className="text-xl self-center font-semibold text-gray-700 capitalize lg:text-2xl group-hover:text-white">
                        {item.name}
                      </p>
                      <p className="mt-2 mx-2 self-center text-gray-500 capitalize group-hover:text-gray-300">
                        {item.email}
                      </p>
                      <p className="mt-2 mx-2 self-center text-gray-500 capitalize group-hover:text-gray-300">
                        {item.phoneNum}
                      </p>
                      <p className="mt-2 mx-2 self-center text-gray-500 capitalize group-hover:text-gray-300">
                        {item.birthday}
                      </p>
                      <p className="mt-2 mx-2 self-center flex-shrink text-gray-500 capitalize group-hover:text-gray-300">
                        {item.description}
                      </p>
                      <div className="mx-auto self-center">
                        <Link href={item.linkedin}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 mx-4 fill-current md:hover:bg-transparent md:border-0 hover:text-white md:p-0"
                            viewBox="0 0 448 512"
                          >
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                          </svg>
                        </Link>
                      </div>
                      <div className="mx-auto self-center">
                        <button className="hover:bg-red-500 p-0.5 rounded border-0 hover:text-white" onClick={deleteButton} name={item.name} value={usuario}>
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          )}
          <form onSubmit={handleSubmit} className="flex form-control border rounded-xl mt-6">
        <div className="flex flex-col 2xl:flex-row">
        <div>
          <label className="label justify-center">
            <span className="label-text font-semibold italic">Nombre</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Nombre del contacto"
            value={contact.name}
            required={true}
            onChange={handleChange}
            className="border rounded-md mx-1"
          />
          </div>
          <div>
          <label className="label justify-center">
            <span className="label-text font-semibold italic">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email de contacto"
            value={contact.email}
            onChange={handleChange}
            className="border rounded-md mx-1"
          />
          </div>
          <div>
          <label className="label justify-center">
            <span className="label-text font-semibold italic">Teléfono</span>
          </label>
          <input
            type="number"
            name="phoneNum"
            placeholder="Número telefónico de contacto"
            value={contact.phoneNum}
            onChange={handleChange}
            className="border rounded-md mx-1"
          />
          </div>
          <div>
          <label className="label justify-center">
            <span className="label-text font-semibold italic">Descripción</span>
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="Introduzca una breve descripción. (Máximo 150 caracteres)"
            value={contact.description}
            maxLength={150}
            onChange={handleChange}
            className="w-3/4 mx-1 border rounded-md 2xl:w-auto"
          />
          </div>
          <div>
          <label className="label justify-center">
            <span className="label-text font-semibold italic">Cumpleaños</span>
          </label>
          <input
            type="date"
            name="birthday"
            placeholder="Fecha de cumpleaños del contacto"
            value={contact.birthday}
            onChange={handleChange}
            className="border rounded-md mx-1"
          />
          </div>
          <div>
          <label className="label justify-center">
            <span className="label-text font-semibold italic">LinkedIn</span>
          </label>
          <input
            type="url"
            name="linkedin"
            placeholder="Perfil de LinkedIn"
            value={contact.linkedin}
            onChange={handleChange}
            className="border rounded-md w:1/2 mx-1 2xl:w-24"
          />  
          </div>
        </div>
        {
                alerta === true ? <div className="alert alert-warning mx-auto mt-2 max-w-sm shadow-lg"><div><svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg><span>¡El nombre de contacto ya existe!</span>
                </div>
              </div> : <></>
              }
          <button className='btn mx-auto mt-2 px-16 mb-2 self-center transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-violet-700 to-violet-900 hover:from-violet-600 hover:to-violet-800' type='submit'>Añadir contacto</button>
      </form>
        </div>
      </main>
      
    </>
  );
}

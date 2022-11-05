import Link from "next/link";
import Footer from "./footer";
import Navbar from "./navbar";

export default function ListNL() {
  return (
    <>
      <main className="hero min-h-screen bg-base-200">
        <div class="container w-full md:w-3/4 mx-auto text-center bg-base-100 my-10 py-6 lg:px-16">
        <h1 className="text-3xl font-bold lg:text-4xl">Mis contactos</h1>
        <div className="divider h-0.5 bg-violet-800"></div>
        <h3 className="my-2 text-xl font-semibold lg:text-2xl italic">Debes estar logeado para consultar tus contactos</h3>
        <Link href="/login"><button className="btn transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-violet-700 to-violet-900 hover:from-violet-600 hover:to-violet-800">
          Iniciar sesión
        </button></Link>
        </div>
      </main>
    </>
  );
}

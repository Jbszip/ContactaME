import Link from "next/link";
import Footer from "./footer";
import Navbar from "./navbar";

export default function HomeNotL() {
  return (
    <>
      <Navbar />
      <main>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col px-16 py-6 lg:flex-row-reverse shadow-2xl rounded bg-base-100">
            <img src="/home.svg" className="max-w-md rounded-lg shadow-2xl" />
            <div className="text-center">
              <h1 className="text-4xl font-bold italic">ContactaME</h1>
              <div className="divider h-0.5 bg-violet-800"></div>
              <p className="py-6">
                Bienvenido a ContactaME, la App web que te permite gestionar tus
                contactos de forma sencilla y eficiente.
              </p>
              <Link href="/login">
                <button className="btn transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-violet-700 to-violet-900 hover:from-violet-600 hover:to-violet-800">Iniciar sesión</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

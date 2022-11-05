import Image from 'next/image'
import Link from 'next/link';
import Footer from "./footer";
import ListLog from "./listLog";
import NavbarLog from "./navbarLog";

export default function HomeLogged(data) {
  return (
    <>
      <NavbarLog />
      <main className="hero min-h-screen bg-base-200">
        <div class="container flex flex-col w-full md:w-3/4 mx-auto text-center bg-base-100 my-10 py-6 lg:px-16">
          <h1 className="text-3xl font-bold lg:text-4xl">
            ¡Bienvenido {data.usuario}!
          </h1>
          <div className="divider h-0.5 bg-violet-800"></div>
          <Image src='/homeLog.svg' alt='Imagen stock' height={500} width={500} />
          <Link href='/miscontactos'><button className='btn mx-auto mt-2 px-16 mb-2 self-center transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-violet-700 to-violet-900 hover:from-violet-600 hover:to-violet-800'>Lista de contactos</button></Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

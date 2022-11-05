import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <main className="hero min-h-screen bg-base-200">
      <div class="container flex flex-col w-full md:w-3/4 mx-auto text-center bg-base-100 my-10 py-6 lg:px-16">
        <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl">No disponible</h1>
        <p className="text-lg font-semibold text-gray-800 lg:text-xl italic">Lo sentimos, pero aún estamos trabajando para implementar esta funcionalidad.</p>
        <Image src="/working.svg" height={500} width={500} />
        <Link href="/">
          <button className="btn self-center transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-violet-700 to-violet-900 hover:from-violet-600 hover:to-violet-800">Ir al inicio</button>
        </Link>
      </div>
    </main>
  );
}

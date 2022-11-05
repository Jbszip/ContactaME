import Link from "next/link";


export default function Navbar() {
  return (
    <>
      <div className="navbar bg-neutral">
        <Link href="/">
          <div className="navbar-start flex-col w-46 max-w-xs rounded ml-0 mr-auto text-white bg-gradient-to-r from-violet-700 to-violet-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
            <p className="uppercase font-semibold italic">Contactame</p>
          </div>
        </Link>
        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost lg:hidden bg-gradient-to-r from-violet-700 to-violet-900 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li className="w-48 my-1">
        <Link href="/login">
            <a className="btn btn-sm text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-violet-700 to-violet-900 hover:from-violet-600 hover:to-violet-800">
              Ingresar
            </a>
          </Link>
        </li>
        <li tabIndex={0} className="w-48 my-1">
        <Link href="/signup">
            <a className="btn btn-sm text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-fuchsia-600 to-fuchsia-800 hover:from-fuchsia-500 hover:to-fuchsia-700">
              Registrarme
            </a>
          </Link>
        </li>
        
      </ul>
    </div>
        <div className="navbar-end hidden lg:flex">
          <Link href="/login">
            <a className="btn mx-1 btn-xs sm:btn-sm md:btn-md md:mx-2 transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-violet-700 to-violet-900 hover:from-violet-600 hover:to-violet-800">
              Ingresar
            </a>
          </Link>
          <Link href="/signup">
            <a className="btn btn-xs sm:btn-sm md:btn-md transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-fuchsia-600 to-fuchsia-800 hover:from-fuchsia-500 hover:to-fuchsia-700">
              Registrarme
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

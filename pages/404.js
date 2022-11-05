import { useState, useEffect } from "react";
import Error404 from "../components/E404";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import NavbarLog from '../components/navbarLog'
export default function Error() {
  const [logeado, setLogeado] = useState(false);
  const [usuario, setUsuario] = useState(false)
  useEffect(() => {
    const hayToken = window.localStorage.getItem("loggedUserToken");
    const hayUser = window.localStorage.getItem("loggedUsername");
    setLogeado(hayToken);
    setUsuario(hayUser)
  }, []);
  return (
    <>
    {
      logeado && usuario ? <NavbarLog /> : <Navbar />
    }
    <Error404 />
    <Footer />
    </>
  );
}

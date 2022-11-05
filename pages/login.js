import LoginComp from "../components/loginComp";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  //Compruebo si ya está tengo token
  const [logeado, setLogeado] = useState(false);
  const [usuario, setUsuario] = useState(false)
  useEffect(() => {
    const hayToken = window.localStorage.getItem("loggedUserToken");
    const hayUser = window.localStorage.getItem("loggedUsername");
    setLogeado(hayToken);
    setUsuario(hayUser)
  }, []);

  logeado && usuario ? router.push("/miscontactos") : console.log("notLogged");

  return <LoginComp />;
}

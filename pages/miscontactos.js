import { useState, useEffect } from "react";
import NavbarLog from "../components/navbarLog";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ListLog from "../components/listLog";
import ListNL from "../components/listNL";



export default function Contactos(){
    const [logeado, setLogeado] = useState(false)
    const [usuario, setUsuario] = useState(false)

    useEffect(()=>{
      const loggedUserTOKEN = window.localStorage.getItem('loggedUserToken')
      const loggedUsername = window.localStorage.getItem('loggedUsername')
      if (loggedUserTOKEN) {
        setLogeado(loggedUserTOKEN)
        setUsuario(loggedUsername)
      }
    },[])
    return(
        <>
          
            {
                logeado && usuario ?  
                <>
                <NavbarLog />
                <ListLog usuario={usuario} token={logeado} /> 
                </>
                :
                <>
                <Navbar />
                <ListNL />  
                </>
                
            }
          <Footer />
        </>
    )
}
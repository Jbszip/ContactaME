import React from 'react'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import HomeLogged from '../components/homeLogged'
import HomeNotL from '../components/homeNotL'

export default function IndexPage(){

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

  return(
    <>
      {
        logeado && usuario ? <HomeLogged data-theme="light" usuario={usuario} token={logeado}/> : <HomeNotL />
      }
    </>
  )
}
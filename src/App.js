import React, { useState } from "react"
import productos from "./productos"
import Carrito from "./Components/Carrito"


import logo from "./img/logobombay.png"
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

function App() {

  const [busqueda, setBusqueda] = useState("")

  const conseguirCategorias = () => {
    let categorias = ["Sin tacc"]
    productos.forEach(e => {
      categorias.push(e.categoria)
    })
    let categoriasListas = Array.from(new Set(categorias))
    return categoriasListas
  }

  const categorias = conseguirCategorias()

  const [busquedaCategoria, setBusquedaCategoria] = useState("")

  const categoriasOptions = categorias.map((e, index) => {
    return <option key={index}>{e}</option>
  })

  return (
    <div>
      <div className="header">

        <div className="header-contenido">
          <div className="header-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header-info">
            <div className="header-info-marca">
              <div className="header-info-marca-dos">
                <h1>Bombay Casa de Comidas</h1>
                <p> <a target="_blank" rel="noreferrer" href="https://www.google.com.ar/maps/place/Ciber.U/@-28.6381806,-65.1346975,194m/data=!3m1!1e3!4m13!1m7!3m6!1s0x9425a84f49ae19cf:0xfaeb099e28896605!2sFr%C3%ADas,+Santiago+del+Estero!3b1!8m2!3d-28.6375538!4d-65.1287605!3m4!1s0x9425a85121e20aa3:0x5c93b82b59df7eb9!8m2!3d-28.6377243!4d-65.135643"> <FontAwesomeIcon icon={faLocationDot} /> Calle Gral Paz entre Eva Peron Y Corrientes, FRIAS(SDE) </a> </p>
                <p>Horarios 19:30 a 01:30hs</p>
              </div>
              <div className="header-social-media">
                <div><a href="https://www.instagram.com/romi_bracamonte/"><FontAwesomeIcon icon={faInstagram} /></a></div>
                <div><a href="https://www.facebook.com/monica.diaz.3532"><FontAwesomeIcon icon={faFacebook} /></a></div>
                <div><a target="_blank" rel="noreferrer" href={`https://wa.me/5493854188206`}><FontAwesomeIcon icon={faWhatsapp} /></a></div>
              </div>
            </div>
            <div className="header-info-herramientas">
           
              <input
                onChange={(event) => setBusqueda(event.target.value)}
                placeholder="Buscar"
              />
            </div>
          </div>
        </div>

      </div>
    
      <Carrito busqueda={busqueda} busquedaCategoria={busquedaCategoria} />
    </div>
  )
}

export default App
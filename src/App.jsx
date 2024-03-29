
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Counter } from './Counter'
import {Reloj} from './Reloj'
import { PokeAbility } from './PokeAbility'
import { PrimerComponente } from './PrimerComponente'
import { SegundoComponente } from './SegundoComponente'
import { TercerComponente } from './TercerComponente'
import { IrPantalla3 } from './IrPantalla3'
import { IrPantalla4 } from './IrPantalla4'
import { GoogleLink} from './GoogleLink'
import { ImageViewer } from './ImageViewer'
import { IngresoTexto } from './IngresoTexto'
import { Navegacion } from './Navegacion'
import {ImageZoom } from './ImageZoom'
import { TextoVerdeRojo } from './TextoVerdeRojo'
import { CuadroTexto } from './CuadroTexto'
import { BotonToogle } from './BotonToogle'
import { Tabla } from './Tabla'
{/*const datito = true   si usamos esto tendriamos que hacer :  <Route path="/pantalla9" element={<TextoVerdeRojo datito={datito } />} />  */}

const datito2 = false
import { Tabla2 } from './Tabla2'
const headers = ['Encabezado 1', 'Encabezado 2', 'Encabezado 3']
const data = [
  ['Celda 1', 'Celda 2', 'Celda 3'],
  ['Celda 4', 'Celda 5', 'Celda 6'],
  ['Celda 7', 'Celda 8', 'Celda 9']
  ]

import { Video } from './Video'
import { VideoYoutube } from './VideoYoutube'
import { Card } from './Card'
import { TextoIcono } from './TextoIcono'
import { OperadorTernario } from './OperadorTernario'
import { Wishlist } from './Wishlist'

const products = [
    { id: 1, name: 'Producto 1' },
    { id: 2, name: 'Producto 2' },
    { id: 3, name: 'Producto 3' },
]

import { CounterUserReducer } from './CounterUserReducer'
import { TextTareaOnSubmit } from './TextTareaOnSubmit'


import Informacion from './Informacion';
import { useState } from 'react';


export default function App() {
  const [numeral, setNumeral] = useState(11); // Inicializamos numeral con el valor 42
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Informacion numeral={numeral} />} />
          <Route path="/pantalla2" element={<PokeAbility abilityId="6" />} />
          <Route path="/pantalla3" element={<Reloj />} />
          <Route path="/pantalla4" element={<PrimerComponente />} />
          <Route path="/pantalla5" element={
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>  
                  <SegundoComponente nombre= "tony" edad ={40+1} nacionalidad="peruano" />  
                  <TercerComponente nombre= "rodrigo" edad ={28} nacionalidad="colombiano" />
                  <Reloj />
                  <PrimerComponente />
                  <IrPantalla3 />
                  <IrPantalla4 />
                  <GoogleLink />
                  <ImageViewer />
                  <IngresoTexto />
           </div>
            }
            />
          <Route path="/pantalla6" element={<TercerComponente nombre= "carlos" edad ={30} nacionalidad="uruguayo" />} />
          <Route path="/pantalla7" element={<Navegacion />} />
          <Route path="/pantalla8" element={<ImageZoom src="https://wallpapers.com/images/high/4k-blue-minimalist-deer-5fc2dalaakntatt7X.jpg" scale={1.5} />} />
          <Route path="/pantalla9" element={<TextoVerdeRojo datito={false} />} />
          <Route path="/pantalla10" element={<CuadroTexto señal={datito2} />} />
          <Route path="/pantalla11" element={<BotonToogle />} />
          <Route path="/pantalla12" element={<Tabla filas={5} columnas={3} />} />
          <Route path="/pantalla13" element={ <Tabla2
            headers={headers}
            data={data}
          />} />
           <Route path="/pantalla14" element={<Video
             videoUrl="https://triviaattack.s3.ca-central-1.amazonaws.com/Opening001X.mp4"
             width="640"
             height="360"
             backgroundColor = "bg-dark"
           />} />
          <Route path="/pantalla15" element={<ImageViewer />} />
          <Route path="/pantalla16" element={<VideoYoutube videoUrl="https://www.youtube.com/watch?v=Z9Lghe4VYk4X" />} />
          <Route path="/pantalla17" element={<Card 
              title="Título de la tarjeta"
              image="https://wallpapers.com/images/high/4k-blue-minimalist-deer-5fc2dalaakntatt7X.jpg"
              description="Descripción de la tarjeta"
              height="150px"
              width="150px"
              backgroundColor="#ccccc"
          />} />
          <Route path="/pantalla18" element={<TextoIcono
            texto="hola"
            tamanoIcono={80}
            tamanoLetra="16px"
            colorLetra="red"
            tipoLetra="Arial"
            nombreIcono="mdi-light:alarm"
          />} />
          <Route path="/pantalla19" element={<OperadorTernario isAuthUser={true}/>} />
          <Route path="/pantalla20" element={<Wishlist products={products} />} />
          <Route path="/pantalla21" element={<CounterUserReducer />} />
          <Route path="/pantalla22" element={<TextTareaOnSubmit />} />
          <Route path="/pantalla23" element={<Counter />} />
           </Routes>
      </Router>


    </main>

  );

}

{/*  
<div style={{ display: 'flex', justifyContent: 'space-between' }}>     Esto sirve para que todos los elmentos se alineen. En este caso se alinean los componenentes de la pantalla 5 
*/}

{/*  
En este caso hemos utilizado el icono mdi-light:alarm  , se pudo haber utilizado el icono icono mdi-light:home 
*/}


{/*  
Mediante el componente Informacion.jsx recibimos la variable llamada numeral desde la app.jsx  y devolvemos el cuadrado de dicho numeral
*/}
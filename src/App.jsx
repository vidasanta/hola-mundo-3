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

export default function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Counter />} />
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

          
        </Routes>
      </Router>
    </main>
  );
}

//<div style={{ display: 'flex', justifyContent: 'space-between' }}>     Esto sirve para que todos los elmentos se alineen. En este caso se alinean los componenentes de la pantalla 5 
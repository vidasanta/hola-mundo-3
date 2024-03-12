import './App.css'

import {PrimerComponente} from './PrimerComponente'
import {SegundoComponente} from './SegundoComponente'
import {TercerComponente} from './TercerComponente'
import {Counter} from './Counter'

export default function App() {
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit
      <PrimerComponente / >
      <SegundoComponente nombre= "tony" edad ={40+1} nacionalidad="peruano"/ >
      <SegundoComponente nombre= "walter" edad ={22} nacionalidad="arequipeño"/ >
      <TercerComponente nombre= "carlos" edad ={30} nacionalidad="uruguayo"/ >
      <Counter / >
    </main>
  )
}

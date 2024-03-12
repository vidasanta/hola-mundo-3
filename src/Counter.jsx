import {useState} from "react"
export const Counter = () => {

  const [number, setNumber] =useState(13);
  console.log(number)

  const sumar = () => {
    setNumber(number + 1);
     }
    const restar = () => {
      setNumber(number -1);
    
  }
  return (
    <div>
      <button onClick= {sumar}>HACER CLICK PARA SUMAR</button>
      <h2>{number}</h2>
      <button onClick= {restar}>HACER CLICK PARA RESTAR</button>
      <hr/>
    </div>
       )
}

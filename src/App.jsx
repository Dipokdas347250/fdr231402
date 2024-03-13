import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
function App() {

  let [ami, setAmi] = useState(0)
  let [show, setShow] = useState(false)

  let handleIncrement = () =>{
    if( ami < 20){
      setAmi(ami + 1)
    }
  }
  let handelDecrement = () =>{
    if( ami >1){
      setAmi(ami - 1)
    }
  }
  let handleClick = ( ) =>{
    setShow(!show)
  } 

  return (
    <>
     <div className='onetwo'>
     <button onClick={handelDecrement} className='one01'>-</button>
    <h2>{ami}</h2>
    <button onClick={handleIncrement} className='two02'>+</button>
     </div>
      <div className='three'>
      <button onClick={handleClick} >Input</button>
     {show == true && <div className="one"></div>}
     
     
      </div>
     
    </>
  )
}

export default App

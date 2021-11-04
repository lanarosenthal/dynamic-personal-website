import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const  Intro = () => {
  const [text, setText] = useState('Add an Intro!')
  const [img, setImg] = useState('')
  
  const [how, sethow] = useState(false);



  return (
    <div style ={{ width: `50%`, margin:`auto` }}>
      <Button style ={{ width: `50%`, margin:`auto` }} onClick={() => sethow(true)}>Add/Edit Intro</Button>
         <Modal show={how}>
          <div style ={{ width: `60%`, margin:`50px`}}>
          Image: <input onChange={e => setImg(e.target.value)} />
          <br></br>
          Text: <input onChange={e => setText(e.target.value)} />
          <br></br>
          <Button style ={{ width: `30%`, margin: `auto`}} onClick={() => sethow(false)}>Save</Button>
          </div>
          </Modal>
          <div style ={{ width: `60%`, margin:`auto` }}>
          {text} <br></br> <img src={img}/>
          </div>
          
    
    </div>
  )
}
export default Intro

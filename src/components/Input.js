import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { auto } from '@popperjs/core';

const Input = ({ dispatchAddToDo }) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [img, setImg] = useState('')


  return (
    <Card style ={{ width: `50%`, margin:`auto` }}>
      <div style ={{ width: `60%`, marginTop:`60px`, marginBottom:`60px`, marginLeft:`30%` }}>
      Title: <input onChange={e => setTitle(e.target.value)} />
      <br></br>
      Image: <input onChange={e => setImg(e.target.value)} />
      <br></br>
      Text: <input onChange={e => setText(e.target.value)} />
      <br></br>
      <br></br>
      <Button style ={{ width: `60%`, margin:`auto` }} onClick={() => dispatchAddToDo(title, text, img)}> Add Post</Button>
      <br></br>
      </div>
    </Card>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddToDo: (title, text, img) => dispatch(addTodo(title, text, img))
})

export default connect(null, mapDispatchToProps)(Input)
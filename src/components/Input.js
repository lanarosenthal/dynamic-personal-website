import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

const Input = ({ dispatchAddToDo }) => {
  const [text, setText] = useState('')
  const [img, setImg] = useState('')


  return (
    <>
      <input onChange={e => setText(e.target.value)} />
      <br></br>
      <input onChange={e => setImg(e.target.value)} />
      <button onClick={() => dispatchAddToDo(text, img)}> Add Todo </button>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddToDo: (text, img) => dispatch(addTodo(text, img))
})

export default connect(null, mapDispatchToProps)(Input)
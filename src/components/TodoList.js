import React, {useState} from 'react'
import { connect } from 'react-redux'
import { toggleTodo, editTodo, toggleEditing, STATUS } from '../actions'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


const { SHOW_COMPLETED, SHOW_ACTIVE } = STATUS



const TodoList = ({ todos, status, dispatchToggleToDo, dispatchEditToDo, dispatchToggleEditing }) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [img, setImg] = useState('')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);


return(
  <>
 
    {todos.map(todo => 
    <div style={{ display: todo.completed ? 'none' : 'inline' }} key={todo.id} > 
      <Card style ={{ width: `40%`, margin: `auto`}}>
        <div style ={{ width: `40%`, margin: `auto`}}>
        Post #{todo.id} 
        <br></br>
        {todo.todotitle} 
        <br></br>
        <img src={todo.todoimg}/>
        <br></br>
        {todo.todotext} 
        <br></br> 
        <Button style ={{ width: `50%`, margin: `auto`}} onClick={() => dispatchToggleToDo(todo.id)}> Delete </Button>
        <br></br>
        <Button style ={{ width: `50%`, margin: `auto`}} onClick={() => dispatchToggleEditing(todo.id, todo.todotitle, todo.todotext, todo.todoimg)}> Edit </Button>
      </div>
      </Card>
     
      
      {(todo.editing)
        ? (
          <>
          <Modal show={true} onHide={handleClose}>
          <div style ={{ width: `60%`, margin:`50px`}}>
          Title: <input onChange={e => setTitle(e.target.value)} />
          <br></br>
          Image: <input onChange={e => setImg(e.target.value)} />
          <br></br>
          Text: <input onChange={e => setText(e.target.value)} />
          <br></br>
          <Button style ={{ width: `30%`, margin: `auto`}} onClick={() => dispatchEditToDo(todo.id, title, text, img)}>Save</Button>
          &nbsp;&nbsp; &nbsp; &nbsp;
          <Button style ={{ width: `30%`, margin: `auto`}} onClick={() => dispatchToggleEditing(todo.id, todo.todotitle, todo.todotext, todo.todoimg)}>Cancel</Button>
          </div>
          </Modal>
          </>
        )
        : <br />}
      </div>)
    }
   
  </>
)
}

const mapStateToProps = state => ({
  todos: state.todos,
  status: state.status
})

const mapDispatchToProps = dispatch => ({
  dispatchToggleToDo: id => dispatch(toggleTodo(id)),
  dispatchEditToDo: (id, title, text, img) => dispatch(editTodo(id,title, text, img)), 
  dispatchToggleEditing: (id, title, text, img) => dispatch(toggleEditing(id, title, text, img))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
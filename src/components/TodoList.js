import React, {useState} from 'react'
import { connect } from 'react-redux'
import { toggleTodo, editTodo, toggleEditing, STATUS } from '../actions'


const { SHOW_COMPLETED, SHOW_ACTIVE } = STATUS



// const filterTodos = (filter, todos) => {
//   switch (filter) {
//     case SHOW_ACTIVE:
//       return todos.filter(todo => !todo.completed)
//     case SHOW_COMPLETED:
//       return todos.filter(todo => todo.completed)
//     default:
//       return todos
//   }
// }

const TodoList = ({ todos, status, dispatchToggleToDo, dispatchEditToDo, dispatchToggleEditing }) => {
  const [clicked, setClicked] = useState(false)
  const [text, setText] = useState('')
  const [img, setImg] = useState('')


  const handleComment = () => {
    setClicked(true);
  
  };

return(
  <>
    {todos.map(todo => 
    <div style={{ display: todo.completed ? 'none' : 'inline' }} key={todo.id} > 
      <div>
        {todo.id} <br></br>
        {todo.todotext} <br></br> 
        <img src={todo.todoimg}/>
        <button onClick={() => dispatchToggleToDo(todo.id)}> Delete </button>
        <button onClick={() => dispatchToggleEditing(todo.id, todo.todotext, todo.todoimg)}> Edit </button>
      </div>
      {(todo.editing)
        ? (
          <>
          <input onChange={e => setText(e.target.value)} />
          <br></br>
          <input onChange={e => setImg(e.target.value)} />
          <button onClick={() => dispatchEditToDo(todo.id, text, img)}>Save</button>
          <button onClick={() => dispatchToggleEditing(todo.id, todo.todotext, todo.todoimg)}>Cancel</button>
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
  dispatchEditToDo: (id, text, img) => dispatch(editTodo(id, text, img)), 
  dispatchToggleEditing: (id, text, img) => dispatch(toggleEditing(id, text, img))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
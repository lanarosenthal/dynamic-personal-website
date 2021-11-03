const default_state = []

import { ADD_TO_DO, EDIT_TO_DO, TOGGLE_TO_DO, TOGGLE_EDITING } from '../actions'

const TodoReducer = (state = default_state, action) => {
  const { type, id, todotext, todoimg, completed, editing } = action
  // const { text, img } = action.todo
  
    switch (type) {
      case ADD_TO_DO:
        console.log(todoimg)
        return [...state, { id, todotext, todoimg, completed, editing }]
      case EDIT_TO_DO:
          
          console.log(action)
          return state.map(todo => {
            if (todo.id === id) {
              return {id, todotext: todotext, todoimg: todoimg, completed, editing}
            }
            return (todo)
          })
      case TOGGLE_TO_DO:
        return state.map(todo => {
          if (todo.id === id) {
            return { id, todotext, todoimg, completed: !todo.completed, editing }
          }
          return (todo)
        })
      case TOGGLE_EDITING:
        return state.map(todo => {
          if (todo.id === id) {
            return { id, todotext, todoimg, completed, editing: !todo.editing }
          }
          return (todo)
        })
      default:
        return state
    }

}

export default TodoReducer
let id = 0

export const ADD_TO_DO = 'ADD_TO_DO'
export const EDIT_TO_DO = 'EDIT_TO_DO'
export const TOGGLE_TO_DO = 'TOGGLE_TO_DO'
export const TOGGLE_EDITING = 'TOGGLE_EDITING'
export const SET_STATUS = 'SET_STATUS'

export const addTodo = (text, img) => ({
  type: ADD_TO_DO,
  id: id++,
  todotext: text,
  todoimg: img,
  completed: false, 
  editing: false
})

export const editTodo = (id, text, img) => ({
  type: EDIT_TO_DO,
  id,
  todotext: text,
  todoimg: img
})

export const toggleTodo = id => ({
  type: TOGGLE_TO_DO,
  id
})

export const toggleEditing = (id, text, img) => ({
  type: TOGGLE_EDITING,
  id,
  todotext: text,
  todoimg: img
})

export const STATUS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const setStatus = status => ({
  type: SET_STATUS,
  status
})
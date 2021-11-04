import React from 'react'

import Title from './components/Title'
import Input from './components/Input'
import TodoList from './components/TodoList'
import BlogPosts from './components/BlogPosts'
import Intro from './components/Intro'

import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <>
    <Title />
    <Intro/>
    <BlogPosts/>
    <Input />
    <TodoList />
  </>
)

export default App
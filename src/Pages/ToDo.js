import ToDoInput from '../Components/ToDo/ToDoInput.js';
import ToDoList from '../Components/ToDo/ToDoList.js';
import React,{ useState } from 'react';
import DeleteAllBtn from '../Components/ToDo/DeleteAllBtn.js';



function ToDo() {
    const [input, setInput ] = useState('');
    const [todoList, setTodoList] = useState( JSON.parse(localStorage.getItem('todoStorage')) || [] );
    const [editTodo, setEditTodo] = useState(null);
    const [editText, setEditText] = useState('');

  return (
    <div className='todo'>
        <ToDoInput input={input} setInput={setInput} todoList={todoList} setTodoList={setTodoList} />

        <ToDoList input={input} setInput={setInput} todoList={todoList} setTodoList={setTodoList} editTodo={editTodo} setEditTodo={setEditTodo} editText={editText} setEditText={setEditText} />

        <DeleteAllBtn setTodoList={setTodoList} />

    </div>
  )
}

export default ToDo;
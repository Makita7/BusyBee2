import React from 'react'

function DeleteAllBtn({setTodoList}) {
    let DAll= () =>{
        setTodoList([]);
    }

  return (
    <button onClick={DAll}>Delete All</button>
  )
}

export default DeleteAllBtn
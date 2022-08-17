import React from 'react'

function DeleteAllBtn({setTodoList}) {
    let DAll= () =>{
        setTodoList([]);
    }

  return (
    <button className='DAll' onClick={DAll}>Delete All</button>
  )
}

export default DeleteAllBtn
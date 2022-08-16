


function ToDoInput({ setInput, input, setTodoList, todoList }) {
    const Submit = (e) => {
        setInput(e.target.value);
        setInput(e.target.reset(''));
        e.preventDefault();
    };

    const AddTodo = () =>{
        if(input !== ''){
            const Task = {
                id: Math.floor(Math.random()*1000),
                value: input,
                Complete: false,
            }
            setTodoList([...todoList, Task]);
        }
    };
  return (
    <>
        <form onSubmit={Submit}>
            <input
                type='text'
                name="text"
                id='text'
                className='input'
                placeholder='Task...'
                minlength='5'
                onChange={(e) => Submit(e)}
                />
            <button className='addBtn' onClick={AddTodo}>Add</button>
        </form>
    
    </>
  )
}

export default ToDoInput;
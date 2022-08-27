
import { useEffect } from 'react';
import Hex1 from '../../Assets/hexagon1.png';
import Hex2 from '../../Assets/hexagon2.png';

function ToDoList({input, setInput,todoList, setTodoList, editTodo, setEditTodo, editText, setEditText}){

    useEffect( () => {
        localStorage.setItem('todoStorage', JSON.stringify(todoList));
    },[todoList])

    const DTask = (e, id) => {
        e.preventDefault();
        setTodoList(todoList.filter( (t) => t.id != id ))
    };

    const CTask = (e, id) =>{
        e.preventDefault();
        const element = todoList.findIndex((elem) => elem.id ==id);

        const NewTodoList = [...todoList];

        NewTodoList[element] = {
            ...NewTodoList[element],
            Complete: true,
        };

        setTodoList(NewTodoList);
    }

    const UTask = (e, id) =>{
        e.preventDefault();
        const element = todoList.findIndex((elem) => elem.id ==id);

        const NewTodoList = [...todoList];

        NewTodoList[element] = {
            ...NewTodoList[element],
            Complete: false,
        };

        setTodoList(NewTodoList);
    }


    let SubmitEdit = (id,value) =>{
        const updatedList = [...todoList].map((item) =>{
                if(item.id === id){
                    item.value = editText;
                }
                return item;

            }
        );

        setTodoList(updatedList);
        setEditTodo(null);
        setEditText('');
    }


    return(
        <>
        {todoList !== [] ?
            <ul>
                {todoList.map(t =>
                    <li key={t.id} className="list">
                        { t.Complete ?
                        <button className='todoToggle' onClick={e => UTask(e, t.id)}>
                            <img src={Hex2} alt="toggle button part 2"/>
                        </button>

                        :<button className='todoToggle' onClick={e => CTask(e, t.id)}>
                            <img src={Hex1} alt="toggle button part 1"/>
                        </button>
                        }


                    <div className='EditInput'>
                        {t.id === editTodo ? (
                                <input
                                    type="text"
                                    onChange={(e) => setEditText(e.target.value)}
                                    minLength="5"
                                />

                            ) : (
                                    <p className={t.Complete ? 'incomplete item' : 'completeT item'}>{t.value}</p>
                                    )}
                    </div>

                    <div className="todo-actions">
                                {t.id === editTodo

                                ? <button className='submitBtn' onClick={() => SubmitEdit(t.id)}>Submit</button>
                                : <button className="editBtn" onClick={() => setEditTodo(t.id, t.value)}>Edit</button>
                            }
                        <button onClick={e => DTask(e, t.id)}>Delete</button>
                    </div>

                    </li>
                )}
            </ul>
        : null}

        </>
    );
}

export default ToDoList;
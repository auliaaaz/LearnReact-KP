import React,{ useState } from 'react';

function ToDoLists () {
    const [todos, setToDos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleChange (e) {
        setInputValue(e.target.value)
    };

    function handleSubmit (e) {
        e.preventDefault()
        if (inputValue.trim()) {
            setToDos([...todos, {text: inputValue, completed: false}])
            setInputValue('')
    }};

    function handleDelete (index) {
        const newToDos = [...todos];
        newToDos.splice(index, 1);
        setToDos(newToDos);
    };

    function handleCheckBox (index) {
        const newToDos = [...todos];
        newToDos[index].completed = !newToDos[index].completed;
        setToDos(newToDos)
    }

    const incompleteToDo = todos.filter(todo => !todo.completed).length;

    return (
        <div className="container text-center p-5">
            <p><h4>To Do List</h4></p>
            <br></br>
            <form className='p-2'>
                <input type="text" value={inputValue} onChange={handleChange}/>
                <button onClick={handleSubmit}>Add</button>
            </form>
            <ol>
                {todos.map((todo, index) => (
                <li className='p-1' key={index} style={{textDecoration:todo.completed ? 'line-through': 'none'}}>
                    <input type="checkbox" checked={todo.completed} onChange={() => handleCheckBox(index)} />
                    {todo.text}
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
                ))}
            </ol>
            <p>Total of To Do List: {incompleteToDo}</p>
        </div>
    )
};

export default ToDoLists;
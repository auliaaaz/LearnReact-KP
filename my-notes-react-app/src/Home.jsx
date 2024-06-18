import { useState, useEffect } from 'react';
import './App.css'
import { nanoid } from 'nanoid';
import ListNotes from './components/ListNotes';
import Popup from './components/DeleteConfirmation';
import Search from './components/Search';

const HomeApp = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is the 1st sample note",
      date: "17/6/2024"
    },
  ]);

  const [popup, setPopup] = useState({ show: false, noteId: null });

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = 'Your data will not be saved, are you sure you want to exit?';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const handleDeleteNote = (noteId) => {
    setPopup({ show: true, noteId });
  };

  const handleDeleteTrue = () => {
    setNotes(notes.filter(note => note.id !== popup.noteId));
    setPopup({ show: false, noteId: null });
  };

  const handleDeleteFalse = () => {
    setPopup({ show: false, noteId: null });
  };

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

    const [searchText, setSearchText] = useState('');
    
    const handleSearchNote = (searchText) => {
      setSearchText(searchText);
    };
  
    const filteredNotes = notes.filter(note => {
      return note.text.toLowerCase().includes(searchText.toLowerCase());
    });

  return (
    <div className='container'>
      <p className='Title'><h3><b>Quick Note & Task Manager</b></h3></p>
      <Search handleSearchNote={handleSearchNote} />
      <ListNotes 
          notes={filteredNotes}
          handleAddNote={addNote} 
          handleDeleteNote={handleDeleteNote} />
      
      {popup.show && (
        <Popup
          handleDeleteTrue={handleDeleteTrue}
          handleDeleteFalse={handleDeleteFalse}
        />
      )}
      <p className='pTodo'></p>
          <ol className='olist'>
          {todos.map((todo, index) => (
          <li className='p-1 lists' key={index} style={{textDecoration:todo.completed ? 'line-through': 'none'}}>
          <input className='checkBox' type="checkbox" checked={todo.completed} onChange={() => handleCheckBox(index)} />
          {todo.text}
          <button className='buttonDelete' onClick={() => handleDelete(index)}>Delete</button>
          </li>
          ))}
          </ol>
          <form className='forms'>
          <input className='formInput' type="text" value={inputValue} onChange={handleChange} placeholder="type to add to-do list..."/>
          <button className='formButton' onClick={handleSubmit}>Add</button>
          </form>
    </div>
  );
};

export default HomeApp;

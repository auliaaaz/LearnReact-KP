import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
    const [noteAdd, setnoteAdd] = useState('')

    const handleChange = (event) => {
        setnoteAdd(event.target.value);
    }

    const handleSaveClick = () => {
        if(noteAdd.trim().length > 0){
            handleAddNote(noteAdd);
            setnoteAdd('');
        }
    };

    return (
        <div className="new-note">
            <textarea rows='8' 
                cols='10' 
                placeholder="Add a note..."
                value={noteAdd}
                onChange={handleChange}>
            </textarea>
            <div className='note-footer'>
                <button className="save-note" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;
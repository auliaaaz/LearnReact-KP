import { useState } from "react";
import Note from "./note";
import AddNote from "./AddNote";

const ListNotes = ({ notes, handleAddNote, handleDeleteNote }) => {
    return(
        <div className="list-notes">
            {notes.map((note) => (
                <Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                    handleDeleteNote={handleDeleteNote} />
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    );3
};

export default ListNotes;
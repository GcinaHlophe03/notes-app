import {React, useState} from 'react';
import { nanoid } from 'nanoid';
import NotesList from './Components/NotesList';
import Search from './Components/Search';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "26/07/2023",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "08/07/2023",
    },  
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "17/07/2023",
    },
    {
      id: nanoid(),
      text: "This is my fourth note!",
      date: "77/07/2023",
    },  
  ]);

  const [searchText, setSearchText] = useState('');

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

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes);
  }

  return (
    <div className="container">
    <Search handleSearchNote={setSearchText}/>
    <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  )
}

export default App
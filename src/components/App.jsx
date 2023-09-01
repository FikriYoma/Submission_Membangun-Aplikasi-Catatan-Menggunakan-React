import React, { useState, useEffect } from 'react';
import { getInitialData } from '../utils';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const initialData = getInitialData();
    setNotes(initialData);
  }, []);

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddNote = (newNote) => {
    setNotes([
      ...notes,
      {
        id: +new Date(),
        ...newNote,
        archived: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  };
  
  const handleArchiveNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };
  

  return (
    <div className="note-app">
      <header className="note-app__header">
        <h1>Aplikasi Catatan Pribadi</h1>
        <div className="note-search">
          <input
            type="text"
            placeholder="Cari catatan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>
      <div className="note-app__body">
        <NoteInput onSubmit={handleAddNote} />
        <NoteList notes={filteredNotes} onDelete={deleteNote} onArchive={handleArchiveNote} />
      </div>
    </div>
  );
};

export default App;

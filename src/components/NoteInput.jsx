import React, { useState } from 'react';

const NoteInput = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const titleCharLimit = 50;

  const handleTitleChange = (e) => {
    if (e.target.value.length <= titleCharLimit) {
      setTitle(e.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() === '' || body.trim() === '') return;

    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    onSubmit(newNote);

    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-input">
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Judul Catatan"
        maxLength="50"
        required
      />
      <p className="note-input__title__char-limit">
  {titleCharLimit - title.length} karakter tersisa
</p>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Isi Catatan"
        required
      />
      <button type="submit">Tambah Catatan</button>
    </form>
  );
};

export default NoteInput;

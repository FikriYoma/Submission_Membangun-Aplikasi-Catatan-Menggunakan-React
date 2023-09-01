import React from 'react';
import NoteItem from './NoteItem';

const NotesList = ({ notes, onDelete, onArchive }) => {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div>
      <h2>Catatan Aktif</h2>
      {activeNotes.length > 0 ? (
        <div className="notes-list">
          {activeNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan aktif</p>
      )}

      <h2>Catatan Diarsipkan</h2>
      {archivedNotes.length > 0 ? (
        <div className="notes-list">
          {archivedNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan diarsipkan</p>
      )}
    </div>
  );
};

export default NotesList;

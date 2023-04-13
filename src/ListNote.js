import NoteItem from "./NoteUnit";

function ListNote({ notes }) {
  return notes.length > 0 ? (
    <ul>
      {notes.map((note, index) => (
        <NoteItem note={note} index={index} key={`node-item-${index}`} />
      ))}
    </ul>
  ) : (
    <p id="no-note-yet">No Note Yet</p>
  );
}

export default ListNote;
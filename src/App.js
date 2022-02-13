import React, { useState } from "react"
import './App.css'
import Notes from './components/Notes'
import Form from './components/Form'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [notes, setNotes] = useState([
    {
      id: 'rpwem',
      title: 'My first Note',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
    },
    {
      id: 'fsgerhh',
      title: 'Shopping Friday',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
    },
    {
      id: 'whasfs',
      title: 'Take out Trash',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
    }
  ])
  const [singleNote, setSingleNote] = useState({})

  const addNote = () => {
    if (singleNote.id) {
      // EDIT EXISTING NOTE
      notes.map(note => {
        if (note.id === singleNote.id) {
          note.title = singleNote.title
          note.description = singleNote.description
        }
        return note
      })
    } else {
      // ADD NEW NOTE
      const id = uuidv4()
      setNotes([{ id, ...singleNote }, ...notes])
    }

    //CLEAR ENTERED DATA
    setSingleNote({})
  }

  const onEditClick = (note) => {
    setSingleNote(note)
  }

  const onDeleteClick = (note) => {
    const updatedNotes = notes.filter(currentNote => currentNote.id !== note.id)
    setNotes(updatedNotes)
    note.id === singleNote.id && setSingleNote({})
  }

  return (
    <div className="App">
      <Notes
        notes={notes}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick} />
      <Form
        note={singleNote}
        setNote={setSingleNote}
        addNote={addNote}
      />
    </div>
  );
}

export default App;

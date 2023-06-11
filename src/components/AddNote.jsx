import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import { useState } from "react";

const AddNote = () => {
    const context = useContext(noteContext)
    const { addNote} = context;

    const [note, setNote] = useState({title:"", description:"", tag:"Default", toRemember:""})

    const handleClick = (e) =>{
        e.preventDefault(); // will make sure that page wont get reloaded
        addNote(note.title,note.description,note.tag, note.toRemember);
    }

    const onChange = (e) =>{
        setNote({...note,[e.target.name]:e.target.value})
    }


  return (
    <div className="container my-3 ">
      <h2 className="text-center">Add a Note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="toRemember" className="form-label">
            Memory
          </label>
          <input
            type="text"
            className="form-control"
            id="toRemember"
            name="toRemember"
            onChange={onChange}
          />
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;

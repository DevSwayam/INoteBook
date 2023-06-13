import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import { useState } from "react";

const AddNote = () => {
    const context = useContext(noteContext)
    const { addNote} = context;

    const [note, setNote] = useState({title:"", description:"", tag:"", toRemember:""})

    const handleClick = (e) =>{
        e.preventDefault(); // will make sure that page wont get reloaded
        addNote(note.title,note.description,note.tag, note.toRemember);
        setNote({title:"", description:"", tag:"", toRemember:""})
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
            minLength={1} 
            required
            value={note.title}
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
            minLength={5} 
            required
            value={note.description}
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
            minLength={1} 
            required
            value={note.toRemember}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
            minLength={1} 
            required
            value={note.tag}
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

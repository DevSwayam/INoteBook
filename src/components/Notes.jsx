import React from "react";
import noteContext from "../context/notes/NoteContext";
import { useContext } from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
    etoRemember: "",
  });
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const ref = useRef();
  const refClose = useRef();
  let navigate = useNavigate();

  
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }else{
      navigate('/login');
    }
    
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
      etoRemember: currentNote.toRemember,
      id: currentNote._id,
    });
  };

  const handleClick = (e) => {
    e.preventDefault(); // will make sure that page wont get reloaded
    editNote(
      note.id,
      note.etitle,
      note.edescription,
      note.etag,
      note.etoRemember
    );
    refClose.current.click();
    props.showAlert("Note Has been Updated", "success")
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote showAlert={props.showAlert}/>
      <button
        type="button"
        className="d-none btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    value={note.etitle}
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={1} 
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    value={note.edescription}
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={onChange}
                    minLength={5} 
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etoRemember" className="form-label">
                    Memory
                  </label>
                  <input
                    value={note.etoRemember}
                    type="text"
                    className="form-control"
                    id="etoRemember"
                    name="etoRemember"
                    onChange={onChange}
                    minLength={3} 
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    tag
                  </label>
                  <input
                    value={note.etag}
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={onChange}
                    minLength={3} 
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary d-none"
                  onClick={handleClick}
                >
                  Add Note
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2 className="my-3">Your Notes</h2>
        {notes.length === 0 && (
          <div className="card container justify-center my-3" style={{"width": "15.5remrem"}}>
            <div className="card-body ">
              <h5 className="card-title"> No Notes To Display</h5>
            </div>
          </div>
        )}
        {notes.map((note) => {
          return (
            <NoteItem showAlert={props.showAlert} key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};
export default Notes;

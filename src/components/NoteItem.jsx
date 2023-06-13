import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";


const NoteItem = (props) => {
  const { note, updateNote } = props;
  const context = useContext(noteContext)
  const { deleteNote} = context;
  const DeleteNote =()=>{
    deleteNote(note._id);
    props.showAlert("Note Has Been Deleted", "success")
  }
  
  return (
    <div className="col-md-3">
      <div className=" card text mb-3 my-4" style={{ maxWidth: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
            <h6 className="card-subtitle "> Memory: {note.toRemember}</h6>
          <h6 className="card-subtitle mb-2 -body-secondary my-2 ">
            Description: {note.description}
          </h6>
          <h6 className="card-subtitle mb-2 -body-secondary ">
            {" "}
            Last Updated: {Date(note.date).toLocaleString().substring(0, 15)}
          </h6>
          <h6 className="card-subtitle mb-2 -body-secondary">
            {" "}
            Tag: {note.tag}
          </h6>
            <i className="fa-solid fa-trash mx-3" onClick={DeleteNote}></i>
            <i className="fa-solid fa-file-pen mx-3" onClick={()=>{updateNote(note)}}></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;

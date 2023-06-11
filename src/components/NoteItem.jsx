import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
        <div className=" card text mb-3 my-4" style={{"maxWidth":"18rem"}} >
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <h6 className="card-subtitle mb-2 -body-secondary my-3"><h className="card-subtitle mb-2 -body-secondary"> Memory:</h> {note.toRemember}</h6>
                <h6 className="card-subtitle mb-2 -body-secondary">
                Description: {note.description}
                </h6>
                <h6 className="card-subtitle mb-2 -body-secondary"> Last Updated: {Date(note.date).toLocaleString().substring(0, 15)}</h6>
            </div>
        </div>
    </div>
    
  );
};

export default NoteItem;

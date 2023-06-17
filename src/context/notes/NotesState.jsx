import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

 const NotesState = (props) => {
  const host ="https://notebook-mongodb-api.onrender.com"
  const notesInitial=[]
  const [notes, setNotes] = useState(notesInitial)
    
    // Get All Notes
    const getNotes =async()=>{
      // TODO Api call

      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
         "auth-token": localStorage.getItem('token')
       },
     });
     const json = await response.json()
     setNotes(json)
    }

      // Add a Note
      const addNote =async(title, description, tag, toRemember)=>{
       // TODO Api call

       const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({title,description,tag,toRemember}), 
      });

      const note = await response.json()
        setNotes(notes.concat(note))
      }


      // Delete a Note
      const deleteNote =async(id)=>{ 
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
        // TODO Api call

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          }
        });
        
      }


      // Edit A Note
      const editNote =async(id, title, description, tag, toRemember)=>{
        //TODO API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({title,description,tag,toRemember}), 
        });
    
      
        let newNotes = await JSON.parse(JSON.stringify(notes))
        // Logic Frontend
        for (let index = 0; index < notes.length; index++) {
          const element = newNotes[index];
          if(element._id === id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            newNotes[index].toRemember = toRemember;
            break; 
          }
        }
        setNotes(newNotes)
      }
      return(
        <NoteContext.Provider value={{notes,addNote,editNote,deleteNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NotesState;


import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

 const NotesState = (props) => {
    const notesInitial = [
        {
          "_id": "6485f8e3a31689ae0af0f15bd",
          "user": "6484fbd6c1d2c5b75976444f",
          "title": "Mern Sikho ",
          "description": "Learning Mern ",
          "tag": "personal",
          "toRemember": "Learn and Undestand",
          "date": "2023-06-11T17:02:50.267Z",
          "__v": 0
        },
        {
          "_id": "6485fe57731689ae0af0f15bf",
          "user": "6484fbd6c1d2c5b75976444f",
          "title": "Front End Sikho ",
          "description": "Learning Front End ",
          "tag": "personal",
          "toRemember": "Learn and Undestand",
          "date": "2023-06-11T17:03:19.655Z",
          "__v": 0
        },
        {
            "_id": "6485fe56731689ae0af0f15bf",
            "user": "6484fbd6c1d2c5b75976444f",
            "title": "Front End Sikho ",
            "description": "Learning Front End ",
            "tag": "personal",
            "toRemember": "Learn and Undestand",
            "date": "2023-06-11T17:03:19.655Z",
            "__v": 0
          },
          {
            "_id": "6485fe57331689ae0af0f15bf",
            "user": "6484fbd6c1d2c5b75976444f",
            "title": "Front End Sikho ",
            "description": "Learning Front End ",
            "tag": "personal",
            "toRemember": "Learn and Undestand",
            "date": "2023-06-11T17:03:19.655Z",
            "__v": 0
          },
          {
          "_id": "6485fe57315689ae0af0f15bf",
          "user": "6484fbd6c1d2c5b75976444f",
          "title": "Front End Sikho ",
          "description": "Learning Front End ",
          "tag": "personal",
          "toRemember": "Learn and Undestand",
          "date": "2023-06-11T17:03:19.655Z",
          "__v": 0
        }
      ];
      const [notes, setNotes] = useState(notesInitial)
    
      // Add a Note
      const addNote =(title, description, tag, toRemember)=>{
       // TODO Api call
       console.log("Adding a New Note");
        const note =  {"_id": "dsds",
        "user": "6484fbd6c1d2c5b75976444f",
        "title": title,
        "description": description,
        "tag": tag,
        "toRemember": toRemember,
        "date": "2023-06-11T17:03:19.655Z",
        "__v": 0};
        setNotes(notes.concat(note))
      }

      // Delete a Note
      const DeleteNote =()=>{
        
      }
      // Edit A Note
      const EditNote =()=>{
        
      }

      return(
        <NoteContext.Provider value={{notes,addNote,EditNote,DeleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NotesState;


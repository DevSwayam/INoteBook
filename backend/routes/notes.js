const express = require("express");
const router = express.Router();
var fetchUser = require("../middleware/fetchUser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

//Route 1: Getting all Notes of particular User using GET : /api/notes/fetchallnotes
router.get("/fetchallnotes", fetchUser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
  res.json(notes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Eroor Occured");
    }
  
});

//Route 2: Adding New notes to a Particular User using POST : /api/notes/addnote Login is reuired
router.post(
  "/addnote",
  fetchUser,
  [
    // Requirements that souls get full field first
    body("title", "Please Enter a Title").isLength({ min: 1 }),
    body(
      "description",
      "Please Enter a short Description About Your note"
    ).isLength({ min: 5 })
  ],
  async (req, res) => {
    try {
        // If there is error then it will show in errors
    const errors = validationResult(req);
    const {title, description, tag, toRemember} = req.body;
    if (!errors.isEmpty()) {
      // is there is error then return reponse with error
      return res.status(400).json({ erros: errors.array() });
    }
    //If there are no errors then create note
    const note = new Note({
        title , description , tag ,  toRemember , user: req.user.id
    })
    const saveNote = await note.save()
    res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Some Eroor Occured");
    }
    
  }
);

//Route 3: Updating a existing note of a Particular User using PUT : /api/notes/updatenote Login is required
router.put("/updatenote/:id", fetchUser, async (req, res) => {
  try {
    // First Using Detructuing to get Fields from request
    let {title, description, tag, toRemember} = req.body;
    // Checking what fields user wants to edit
    let newNote ={};

    // Check what Fields are getting changed
    if(title){
      newNote.title=title;
    }
    if(description){
      newNote.description=description;
    }
    if(tag){
      newNote.tag=tag;
    }
    if(toRemember){
      newNote.toRemember=toRemember;
    }

     let note = await
       Note.findById(req.params.id);
     // Checks whether Such Note Exists or Not
     if(!note){
      res.status(500).send("Note Does Not Exist");
     }

     // If such Note exists then check wether the one who wants to edit note and the one who owns the note are same or not
     if(note.user.toString() !== req.user.id){
      return res.status(500).send("Note Does Not Exist");
     }
     note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true});
     res.json({note})
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Some Eroor Occured");
  }

})


//ToDo
//Route 4: Deletiing a existing note of a Particular User using DELETE : /api/notes/deletenote Login is required

router.delete("/deletenote/:id", fetchUser, async (req, res) => {
  try {
     let note = await
       Note.findById(req.params.id);
     // Checks whether Such Note Exists or Not
     if(!note){
      res.status(500).send("Note Does Not Exist");
     }

     // If such Note exists then check wether the one who wants to edit note and the one who owns the note are same or not
     if(note.user.toString() !== req.user.id){
      return rres.status(500).send("Note Does Not Exist");
     }
     note = await Note.findByIdAndDelete(req.params.id, {delete:true});
     res.json({note:"Note has been deleted"})
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Some Eroor Occured");
  }

})

module.exports = router;

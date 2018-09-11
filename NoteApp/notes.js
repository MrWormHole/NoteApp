const fs = require("fs");

var createNote = (title,content) =>  {
    var notes = fetchNotes();
    var note = {
        title,
        content
    }
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        console.log("\nNote has been created");
        console.log("-----");
        console.log("Title: " + title);
        console.log("Content: " + content);
        console.log("-----");
    }
    else{
        console.log("\nNote hasn't been created.You have already a note that has the same title!");
        console.log("-----");
    }
};

var deleteNote = (title) => {
    var notes = fetchNotes();
    var remainingNotes = notes.filter((note) => note.title !== title);
    saveNotes(remainingNotes);

    if(notes.length !== remainingNotes.length){
        console.log("\nNote " + title + " has been deleted");
        console.log("-----");
    }
    else{
        console.log("\nNote hasn't been deleted.Because you don't have a note called " + title);
        console.log("-----");
    }
};

var getNote = (title) => {
    var notes = fetchNotes();
    var desiredNote = notes.filter((note) => note.title === title);

    if(desiredNote.length !== 0){
        console.log("\nNote has been found");
        console.log("-----");
        console.log("Title: " + desiredNote[0].title);
        console.log("Content: " + desiredNote[0].content);
        console.log("-----");
    }
    else{
        console.log("\nNote hasn't been found");
        console.log("-----");
    }
};

var getAllNotes = () => {
    var notes = fetchNotes();
    console.log("\n-----");
    notes.forEach(note => {
        console.log(note.title);
    });
    console.log("-----");
    if(notes.length === 0){
        console.log("Records are empty");
    }
    else{
        console.log(`Records have ${notes.length} note(s)`);
    }
};

var logHelp = () => {
    console.log("\n-----");
    console.log("To add a note,use this command =>   " + "add --title='' --content=''");
    console.log("To remove a note,use this command =>   " + "remove --title=''");
    console.log("To read a note,use this command =>   " + "read --title=''");
    console.log("To see all notes titles,use this command =>   " + "list");
    console.log("-----");
}

//utility
var fetchNotes = () => {
    try{
        return JSON.parse(fs.readFileSync("notes-data.json"));
    }
    catch(e){
        return [];
    }
};

//utility
var saveNotes = (notes) => {
    fs.writeFileSync("notes-data.json" , JSON.stringify(notes));
};

module.exports = {
    createNote,
    deleteNote,
    getNote,
    getAllNotes,
    logHelp
};

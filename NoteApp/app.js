const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");
var command = yargs.argv._[0];
//console.log(yargs.argv);

if(command === "add"){
    notes.createNote(yargs.argv.title,yargs.argv.content);
}
else if(command === "remove"){
    notes.deleteNote(yargs.argv.title);
}
else if(command === "read"){
    notes.getNote(yargs.argv.title);
}
else if(command === "list"){
    notes.getAllNotes();
}
else if(command === "help"){
    notes.logHelp();
}
else{
    console.log("Command not recognized.Please try this command =>   help");
}

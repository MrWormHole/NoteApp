const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");
var command = yargs.argv._[0];
//console.log(yargs.argv);
//run npm install on app.js directory then run node app.js help 
//all operations are done on command line

switch(command){
	case "add":
		notes.createNote(yargs.argv.title,yargs.argv.content);
		break;
	case "remove":
		notes.deleteNote(yargs.argv.title);
		break;
	case "read":
		notes.getNote(yargs.argv.title);
		break;
	case "list":
		notes.getAllNotes();
		break;
	case "help":
		notes.logHelp();
		break;
	default:
		console.log("Command not recognized.Please try this command =>   help");
}

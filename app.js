console.log("Starting app.js");
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes.js');

// customise yargs version
yargs.version('1.1.0');

// add, remove, read, list


// create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})


// create remove command 

yargs.command({
    command: 'remove',
    describe: 'removing the note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }


})

yargs.command({
    command: 'read',
    describe: 'reading the note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'listing notes',
    handler() {
        notes.listNotes();
    }
})

console.log(yargs.argv);

console.log("satring notes.js")

const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added!"));
    } else {
        console.log(chalk.red.inverse("Note already taken"));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
        return note.title !== title;
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note removed!"));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse("Note not found"));
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }

}

const readNote = (title) => {
    const notes = loadNotes();
    const noteTitle = notes.find((note) => note.title === title);

    if (noteTitle) {
        console.log(chalk.green.inverse("Note title: " + title));
        console.log(chalk.blue.inverse("Body: " + "", noteTitle.body));
    } else {
        console.log(chalk.red.inverse("Unablet to find: " + title));
    }


}

const listNotes = () => {
    try {
        const notes = loadNotes();
        console.log(chalk.inverse("Your notes:"));
        notes.foreach((note) => console.log(chalk.green(note.title)));

    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}
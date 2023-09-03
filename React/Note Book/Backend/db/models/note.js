const mongoose = require('mongoose');
const { Schema } = mongoose;


const NoteSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId, ref: 'User',
            required: true,            
        },
        title: {
            type: String,
            required: true          
        },
        discription: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    },
    { collection: 'notes' }
);



const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
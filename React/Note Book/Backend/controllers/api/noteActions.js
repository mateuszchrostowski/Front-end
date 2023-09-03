const Note = require('../../db/models/note')


class NoteActions  {

    homePage(req, res) {
        res.send('Serwer działa');
    }
    async getAllNotes(req, res) {
        try {         
            
            const notes = await Note.find({});
            return res.status(200).json(notes)

            //Pobranie notatek użytkownika
            // const id = req.params.userId;
            // //const note = await Note.findOne({userId: id});
            // const allUserNotes = await Note.find({ 'userId': {$in: id} });
            // //res.status(200).json(allUserNotes);
            // res.status(200).send(allUserNotes);
            

        } catch (error) {
            return res.status(500).json({error: error.message});
        }                  
        
    }
    async getUserNotes(req, res) {
        try {         
            const userid = req.params.userId;
            const allUserNotes = await Note.find({ 'userId': {$in: userid} });
            res.status(200).json(allUserNotes);          
            

        } catch (error) {
            return res.status(500).json({error: error.message});
        }                  
        
    }
    async getNote(req, res) {
        try {
            const id = req.params.id;
            const note = await Note.findOne({_id: id});
            res.status(200).json(note);
            
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    }
    async saveNote(req, res) {
        try {            
            const newNote = await Note.create(req.body)
            return res.status(201).json(newNote);
            
        } catch (error) {
            return res.status(422).json({error: error.message});
        }        
    }
    async updateNote(req, res) {
        try {
            const id = req.params.id;
            const title = req.body.title;
            const discription = req.body.discription;
            const updatedNote = await Note.findOne({_id: id});
            
            updatedNote.title = title;
            updatedNote.discription = discription;
            await updatedNote.save();

            res.status(201).json(updatedNote);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    }
    async deleteNote(req, res) {
        try {
            const id = req.params.id;
            await Note.deleteOne({_id: id});

            res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    }
    
};

module.exports = new NoteActions();
const express = require('express');
const router = express.Router();

noteController = require('../controllers/api/noteActions');
userController = require('../controllers/api/userActions');

//strona główna
router.get('/', noteController.homePage);

//pobieranie wszystkich notatek
router.get('/notes', noteController.getAllNotes);

router.get('/usernotes/:userId', noteController.getUserNotes)

//pobieranie konkretnej notatki
router.get('/notes/:id', noteController.getNote)

//zapisanie notatki
router.post('/notes', noteController.saveNote);

//edytowanie notatki
router.put('/notes/:id', noteController.updateNote);

//usunięcie notatki
router.delete('/notes/:id', noteController.deleteNote);



//rejestracja nowego użytkownika
router.post('/register', userController.registerUser);

//logowanie użytkownika
router.post('/login', userController.loginUser)

//dane zalogowanego użytkownika
router.post('/userData', userController.getUserData)


module.exports = router;
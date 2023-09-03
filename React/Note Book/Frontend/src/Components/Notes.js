import React from 'react';
import Note from './Note';
import NewNote from './NewNote';
import EditNote from './EditNote';
import Modal from 'react-modal';
import axios from '../axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import UserHome from './userHome';
import styles from '../modalStyle'

class Notes extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      notes: [],
      userData: [],      
      showEditModal: false,
      editNote: {}
    };
  }

  componentDidMount() {  
    this.fetchUserData();     
    console.log(this.state); 
    console.log(window.localStorage.getItem('loggedIn'));
    console.log(window.localStorage.getItem('token'));    
  }

  async fetchNotes() {
      
    const userid = window.localStorage.getItem("userId");
   
    //Poniższy sposób nie zadziałał
    //const user = this.state.userData._id;
    
    const res = await axios.get('/usernotes/' + userid);
    
    const notes = res.data;
    this.setState({
       notes: notes
    });
  }
  
  logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  showState() {    
    console.log(this.state);
  };

  fetchUserData() {fetch("http://localhost:3001/api/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    }).then((res) => res.json())
    .then((data) => {
      console.log(data.data)    
      const userData = data.data;
      //this.setState(Object.assign({}, this.state.userId = userId));
      //this.setState(Object.assign(this.state,{userId:userId})); 
      this.setState({
        userData: userData
    });    

      window.localStorage.setItem("userId", userData._id);

      console.log(window.localStorage.getItem("userId"));
      this.fetchNotes();
        
      

      if (data.data == "token expired") {
        alert("Token expired login again");
        window.localStorage.clear();
        window.location.href = "./sign-in";
      };
    })};
  
  

  async deleteNote(id) {
    const notes = [...this.state.notes]
                    .filter(note => note._id !== id);

    await axios.delete('/notes/' + id);
    
    this.setState({ notes });
  }

  async addNote(note) {
    const notes = [...this.state.notes];
    // add to backend
    try {
      const res = await axios.post('/notes', note);
      const newNote = res.data;
      console.log(newNote);
      // add to frontend
      notes.push(newNote);
      this.setState({
        notes: notes
    });
    } catch (err) {
      NotificationManager.error(err.response.data.message);
    }
  }

  async editNote(note) {
    // edit backend
    await axios.put('/notes/' + note._id, note);

    // edit frontend
    const notes = [...this.state.notes];
    const index = notes.findIndex(x => x._id === note._id);
    if (index >= 0) {
      notes[index] = note;
      this.setState({ notes });
    }
    this.toggleModal();
  }

  toggleModal() {
    this.setState({
      showEditModal: !this.state.showEditModal
    });
  }

  editNoteHandler(note) {
    this.toggleModal();
    this.setState({ editNote: note });
  }

  render() {
    return (
    <div>
      <NotificationContainer />

      <UserHome userData={this.state.userData}/>


      <h1>Note Book</h1>

      <NewNote
        onAdd={(note) => this.addNote(note)} userId={this.state.userData._id}/>      

      <Modal style={styles}
        isOpen={this.state.showEditModal}>
          <EditNote
            title={this.state.editNote.title}
            discription={this.state.editNote.discription}
            id={this.state.editNote._id}
            onEdit={note => this.editNote(note)} />
          <button className='btn btn-danger' 
            onClick={() => this.toggleModal()}>Cancel</button>
      </Modal>

      {this.state.notes.map(note => (
        <Note 
          key={note._id}
          title={note.title}
          discription={note.discription}
          id={note._id}
          onEdit={(note) => this.editNoteHandler(note)}
          onDelete={(id) => this.deleteNote(id)} />
      ))}

    </div>
    );
  }
}

export default Notes;
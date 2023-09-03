import React, { useState } from 'react';

function NewNote(props) {

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const changeTitleHandler = event => {
    const value = event.target.value;
    setTitle(value);
  }  
  const changeDescHandler = event => {
    const value = event.target.value;
    setDesc(value);
  }
  const addNote = () => {
    const note = {
      title: title,
      discription: desc,
      userId: props.userId
    };
    props.onAdd(note);

    setTitle('');
    setDesc('');
    setShowForm(false);
  }

  return (
    showForm ? (
      <div className="note">
        <label>Title:</label>
        <input type="text" 
          value={title} 
          onChange={changeTitleHandler} />

        <label>Discription:</label>
        <input type="text" 
          value={desc}
          onChange={changeDescHandler} />

        <button className='btn btn-success' onClick={() => addNote()}>Add note</button>
        <button className='btn btn-danger' onClick={() => {setShowForm(false)}}>Cancel</button>
      </div>
    ) : (
      <button className='btn btn-success' onClick={() => setShowForm(true)}>Add note</button>
    )
  );
}

export default NewNote;
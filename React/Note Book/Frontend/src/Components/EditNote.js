import React, { useState } from 'react';

export default function EditNote(props) {

  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.discription);

  const changeTitleHandler = event => {
    const value = event.target.value;
    setTitle(value);
  }
  const changeDescHandler = event => {
    const value = event.target.value;
    setDesc(value);
  }
  const editNote = () => {
    const note = {
      title: title,
      discription: desc,
      _id: props.id
    };
    props.onEdit(note);
  }

  return (
    <div className="note">
      <div id='edit-note'>
        <label for="edit-title">Title:</label>
        <input id='edit-title' type="text"
          value={title}
          onChange={changeTitleHandler} />

        <label for='desc-edit'>Discription:</label>
        <input id='desc-edit' type="text"
          value={desc}
          onChange={changeDescHandler} />

        <button id='save-edit' className='btn btn-success' onClick={() => editNote()}>Save</button>
      </div>
    </div>
  );
}
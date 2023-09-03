import React, { useState } from 'react';

function Note(props) {

  const [showDesc, setShowDesc] = useState(false);

  const toggleDesc = () => {
    setShowDesc(!showDesc);
  }
  const editHandler = () => {
    props.onEdit({ 
      title: props.title, 
      discription: props.discription, 
      _id: props.id 
    });
  }

  return (
    <div className="note">
      <p>{props.title}</p>
      {showDesc && (
        <div className="description">{props.discription}</div>
      )}
      <button className='btn btn-info' onClick={editHandler} >Edit</button>
      <button 
        className="btn btn-danger" 
        onClick={() => props.onDelete(props.id)}>Delete</button>
      <button className='btn btn-warning'onClick={toggleDesc}>{!showDesc?'Rozwiń':'Zwiń'}</button>
    </div>
  );
}

export default Note;
import React, {useEffect, useState} from 'react';
import './App.css';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const [todos, setTodos] = React.useState([]);

    // onMounted() 

    useEffect( () => {
        if ( todos.length == 0 ){
            const tds = localStorage.getItem('todos');
            const obj = JSON.parse(tds);
            setTodos(obj);
        } else {
           localStorage.setItem('todos', JSON.stringify(todos));
        }
    });

    const saveData = () => {

    }

    const readData = () => {

    }

    const addTodo = (text) => {
        setTodos([ ...todos, {text: text, done: false} ]);
    }

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos( newTodos );
    }

    const markTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].done = true;
        setTodos( newTodos );
    }

    return(
        <div className='app'>
            <div className='container'>
                <h1> Lista rzeczy do zrobienia </h1>
                <ToDoForm addTodo={addTodo} />
                {
                    todos.map( (todo, index) => {
                        return( 
                            <Card>
                                <Card.Body>
                                    <Todo key={index} index={index} todo={todo} markTodo={markTodo} removeTodo={removeTodo} />
                                </Card.Body>
                            </Card>
                        )
                     })
                }
            </div>
        </div>
    )
}

function Todo( {key, index, todo, markTodo, removeTodo} ){
    return (
        <div className='todo'>
            <span style={ { textDecoration: todo.done ? "line-through" : "" } } > {todo.text} </span>
            <div className='rightButtons'>
                <Button variant='outline-success' onClick={() => markTodo(index)}>#</Button>
                <Button variant='outline-danger' onClick={ () => removeTodo(index)}>x</Button>
            </div>
        </div>
    )
}

function ToDoForm( { addTodo } ){
    const [value, setValue] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        if ( value ){
            addTodo(value);
            setValue("");
        }
        return;
    }

    return (
        <Form onSubmit={formSubmit}>
            <Form.Group>
                <Form.Label>Dodaj rzecz do zrobienia: </Form.Label>
                <Form.Control type="text" className='input' value={value} onChange={ (e) => { setValue(e.target.value) }} placeholder='Wpisz tutaj zadanie' />
            </Form.Group>
            <Button type='submit' variant="primary">Dodaj</Button>
        </Form>
    )
}

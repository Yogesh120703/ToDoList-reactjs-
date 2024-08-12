import { useState } from 'react'
import React from 'react';
import ToDoItem from "./toDoItem";
import './App.css'

function App() {
  const [input, setInput] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    
    const newValue = event.target.value
    setInput(newValue);
    
  }

  function addItem(){
    setItems( (prevItems) => {return [...prevItems, input]});
    setInput("");
      
  }

  function deleteItem(id: number) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        var x = item
        x = x+ ""
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={input}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
      <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App

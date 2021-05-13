import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {

  

  const handleClick = (e) =>{
    //console.log(e.target.classList);
    e.target.classList.toggle("crossed-line");
  }

  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <ul className="list-group" key={todo.id}>
              <li 
              onClick={handleClick} 
              className="list-group-item d-flex">
                <TodoItem 
                {...todo} 
                key={todo.id} 
                deleteTodo={props.deleteTodo}/>
              </li>
            </ul>
            
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;

import React from "react";
import "./TodoItem.css";

function Todo(props) {

  
  const { content,id } = props;
  //console.log(id)
  return (
  <div>
    {content}
    <button
    onClick={()=> props.deleteTodo(id)} 
    className="btn btn-danger ml-auto">Sil</button>
  </div>
  )
}

export default Todo;

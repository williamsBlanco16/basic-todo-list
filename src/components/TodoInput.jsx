import React from 'react'

class TodoInput extends React.Component{
 
  handlerSubmit(e){
    e.preventDefault();
    this.props.addItem(e.target.elements.todoInput.value);
  }

  render(){
    return(
       <form onSubmit = {this.handlerSubmit.bind(this)}>
         <input name="todoInput" type="text"/> 
         <button type="submit">Add</button>
       </form>
    );
  }
}

export default TodoInput;
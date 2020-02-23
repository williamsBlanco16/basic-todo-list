import React from 'react';

class TodoItem extends React.Component{
  
  render(){
    const {
      name,
      done} = this.props;

  return(
    <li 
      style={{textDecoration:done ? 'line-through ':'none'}}> 
      { name } 
      <a href="#" 
        onClick={this.props.onToggleDone}>
          {done?' Marck as not done':' Marck As done'}
        </a>
    </li>);
  }
}

export default TodoItem;
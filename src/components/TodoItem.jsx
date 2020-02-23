import React from 'react';

class TodoItem extends React.Component{
  
  render(){
    const {
      name,
      done} = this.props;

  return(<li style={{textDecoration:done ? 'line-through ':'none'}}> { name } </li>);
  }
}

export default TodoItem;
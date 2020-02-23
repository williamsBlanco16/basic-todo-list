import React from 'react';

import TodoItem from './TodoItem'

class TodoList extends React.Component{

  render(){
    const items = [
      { name:"First Element", done:false },
      { name:"Second Element", done:true},
      { name:"third Element", done:false},
    ]

    return(
    <ul>
      {
        items.map((item,i) => <TodoItem key ={i} name={item.name} done={item.done}/>)
      }
    </ul>);
  }
}

export default TodoList;
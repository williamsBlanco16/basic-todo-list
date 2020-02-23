import React from 'react';

import TodoItem from './TodoItem'
import TodoInput from './TodoInput'

class TodoList extends React.Component{

  constructor(){
    super();

    this.state = {
      items:[]
    }
  }

  handlerAddItem(name){
    this.setState({items:this.state.items.concat({name,done:false})})
  }

  handlerToggleDone(item){
    const newItems = this.state.items.slice();
    newItems[newItems.indexOf(item)].done = !item.done;

    this.setState({item:newItems});
  }

  render(){
    const items = this.state.items;

    return(
    <div>
      <ul>
        {
          items.map((item,i) => <TodoItem key ={i} name={item.name} done={item.done} onToggleDone={this.handlerToggleDone.bind(this,item)}/>)
        }
      </ul>
      <TodoInput addItem = {this.handlerAddItem.bind(this)}/>
    </div>
    );
  }
}

export default TodoList;
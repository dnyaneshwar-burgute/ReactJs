import _from from 'lodash';
import React from 'react';
import TodoListHeader from './todo-list-header'
import TodoListItem from './todo-list-item'

export default class TodoList extends React.Component {
  renderItems(){
    return _.map(this.props.todos, (todo, index) =>  <TodoListItem key={index} {...todo}/>);
    {/*
      same as
      function(todo, index){
        return <TodoListItem/>
      }

      ...todo
      task = {todo.task} isCompleted: {taks.isCompleted}
    */}
  }

  render() {
      return (
        <div>
          <table>
              <TodoListHeader />
              <tbody>
                {this.renderItems()}
              </tbody>
          </table>
        </div>
      );
  }
}
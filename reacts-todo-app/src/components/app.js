import React from 'react';
import TodoList from './todo-list'
const todos = [
  {
    task: 'Make React Tutorial',
    isCompleted: false
  },
  {
  task: 'Eat Dinner',
  isCompleted: true
  }
];
export default class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        todos
      }
    };

    render() {
        return (
            <div>
                <h1>React ToDos App</h1>
                <TodoList todos = { this.state.todos }/>
            </div>
        );
    }
}

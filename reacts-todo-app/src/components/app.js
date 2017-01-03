import React from 'react';
import TodoList from './todo-list'
import CreateTodo from './create-todo'
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
                <CreateTodo createTask = {this.createTask.bind(this)}/>
                <TodoList todos = { this.state.todos }/>
            </div>
        );
    }

    createTask(task){
      this.state.todos.push({task, isCompleted: false});
      this.setState({todos: this.state.todos});
    }
}

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
                <TodoList todos = { this.state.todos } toggleTask = {this.toggleTask.bind(this)}/>
            </div>
        );
    }

    toggleTask(task){
      const foundTask = _.find(this.state.todos, todo => todo.task == task);
      foundTask.isCompleted = !foundTask.isCompleted;
      this.setState({todos: this.state.todos });
    }

    createTask(task){
      this.state.todos.push({task, isCompleted: false});
      this.setState({todos: this.state.todos});
    }
}

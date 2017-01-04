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
                <TodoList todos = { this.state.todos }
                  toggleTask = {this.toggleTask.bind(this)}
                  saveTask = {this.saveTask.bind(this)}
                  deleteTask = {this.deleteTask.bind(this)}
                />
            </div>
        );
    }

    deleteTask(task){
      _.remove(this.state.todos, todo => todo.task === task);
      this.setState({todos: this.state.todos});
    }

    saveTask(oldTask, newTask){
      const foundTask = _.find(this.state.todos, todo => todo.task === oldTask);
      foundTask.task = newTask;
      this.setState({todos: this.state.todos})
    }

    toggleTask(task){
      const foundTask = _.find(this.state.todos, todo => todo.task === task);
      foundTask.isCompleted = !foundTask.isCompleted;
      this.setState({todos: this.state.todos });
    }

    createTask(task){
      this.state.todos.push({task, isCompleted: false});
      this.setState({todos: this.state.todos});
    }
}

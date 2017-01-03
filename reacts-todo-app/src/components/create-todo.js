import React from 'react';

export default class CreateTodo extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit = {this.handleCreate.bind(this)}>
          <input type='text' placeholder='What do I need to do !!!' ref='createInput'/>
          <input type='submit' value='Create'/>
        </form>
      </div>
    );
  }

  handleCreate(event){
    event.preventDefault();
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }
}

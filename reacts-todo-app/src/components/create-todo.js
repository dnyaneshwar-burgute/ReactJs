import React from 'react';

export default class CreateTodo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: ""
    }
  }
  render() {
    return (
      <div>
        <form onSubmit = {this.handleCreate.bind(this)}>
          <input type='text' placeholder='What do I need to do !!!' ref='createInput'/>
          <input type='submit' value='Create'/>
          {this.renderError()}
        </form>
      </div>
    );
  }

  renderError(){
    if (! this.state.error){return null;}
    return(
      <div style={{color: 'red'}}>{this.state.error}</div>
    );
  }

  handleCreate(event){
    event.preventDefault();
    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateTask = this.validateInput(task);

    if (validateTask){
      this.setState({error: validateTask});
      return;
    }

    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }

  validateInput(task){
    if(!task){
      return 'task should not be empty';
    }else if (_.find(this.props.todos, todo => todo.task === task))
    {
      return 'task already exist';
    }else{
      return null;
    }
  }
}

import React from 'react';
export default class TodoListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false
    }
  }

  render() {
      return (
        <tr>
          {this.renderTaskSection()}
          {this.renderActionsSections()}
        </tr>
      );
  }

  renderTaskSection(){
    const {task, isCompleted} = this.props
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    }
    return(
      <td style={taskStyle}
          onClick = {this.props.toggleTask.bind(this, task)}
      >{task}</td>
    );
  }

  renderActionsSections(){
    if(this.state.isEditing){
      return(
       <td>
          <button>Save</button>
          <button onClick= {this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }
    return(
        <td>
          <button onClick = {this.onEditClick.bind(this)}>Edit</button>
          <button>Delete</button>
        </td>
    );
  }

  onEditClick(){
    this.setState({isEditing: true});
  }

  onCancelClick(){
    this.setState({isEditing: false});
  }
}

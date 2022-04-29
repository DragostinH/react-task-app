import React, { Component } from 'react';
import './index.scss';
import Overview from './Components/Overview';
import uniqid from "uniqid";


class App extends Component {
  constructor() {
    super();
    this.state = {
      task: {
        text: '',
        id: uniqid(),
        position: 0,
        editBtn: "",
        isEditible: false
      },
      tasks: [],
    };
  }



  handleEdit = (taskToEdit, e) => {
    console.log(taskToEdit);
    console.log(e);
    let arr = [...this.state.tasks];
    arr.forEach(element => {
      if (element.id === taskToEdit.id) {
        if (element.editBtn === 'Edit') {
          element.editBtn = 'Submit'
          element.isEditible = true;

        } else {
          element.editBtn = 'Edit'
          element.isEditible = false;
        }

      }
    });

    this.setState({
      tasks: arr,
    })
  }

  handleDelete = (taskToDelete) => {
    let newArr = [...this.state.tasks].filter(task => {
      return task.id !== taskToDelete;
    })
    this.setState({
      tasks: newArr,
    })
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        position: this.state.tasks.length + 1,
        editBtn: 'Edit',
        isEditible: false
      }
    })
  }

  handleTaskChange = (task, e) => {
    task.text = e.target.value
    this.setState({
      task: {
        text: e.target.value,
        editBtn: 'Edit',
        isEditible: false
      }
    })
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    if (e.target.firstChild.value.trim() !== "") {
      this.setState({
        tasks: this.state.tasks.concat(this.state.task),
        task: {
          text: '',
          id: uniqid(),
          editBtn: 'Edit',
          isEditible: false
        }
      })
    }
  }

  render() {
    const { task, tasks } = this.state;
    return (
      <div className="task-app">
        <h2>Enter Task</h2>
        <form
          onSubmit={this.onSubmitTask} action="#">
          <input
            value={task.text}
            onChange={this.handleChange}
            type="text"
            name="task-input"
            id="task-input" />
          <input type="submit" value="Submit" />
        </form>
        <Overview
          tasks={tasks}
          task={task}
          handleTaskChange={this.handleTaskChange}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
export default App;

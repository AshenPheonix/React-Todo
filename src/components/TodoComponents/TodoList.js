// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import './Todo.css'

export default class TodoList extends Component {
    render() {
        return (
            <section className="wrapper">
                <section className="task-list">
                    {this.props.list.map((task)=>(
                        <Todo
                            completed={task.completed}
                            task={task.task}
                            key={task.id}
                            id={task.id}
                            edit={this.props.edit}
                        />
                    ))}
                </section>
                <TodoForm
                    submit={this.props.add}
                    clear={this.props.clear}
                    name={this.props.newTaskName}
                    formChange={this.props.formChange}
                />
            </section>
        )
    }
}

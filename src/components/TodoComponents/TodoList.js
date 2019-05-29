// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

export default class TodoList extends Component {
    constructor(props){
        super(props)
        this.checkmark=this.checkmark.bind(this)
        this.add=this.add.bind(this)
    }
    render() {
        return (
            <section className="wrapper">
                <section className="taskList">
                    {this.props.list.map((task)=>(
                        <Todo
                            completed={task.completed}
                            task={task.task}
                            key={task.id}
                            edit={this.checkmark}
                        />
                    ))}
                </section>
                <TodoForm
                    submit={this.add}
                />
            </section>
        )
    }
    add(e){
        this.props.add(e)
    }
    checkmark(e){
        this.props.add(e)
    }
}

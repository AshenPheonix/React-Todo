// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import './Todo.css'

export default class TodoList extends Component {
    constructor(props){
        super(props)
        this.checkmark=this.checkmark.bind(this)
        this.add=this.add.bind(this)
        this.clear=this.clear.bind(this)
    }
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
                            edit={this.checkmark}
                        />
                    ))}
                </section>
                <TodoForm
                    submit={this.add}
                    clear={this.clear}
                />
            </section>
        )
    }
    add(e){
        this.props.add(e)
    }
    checkmark(e){
        this.props.edit(e)
    }
    clear(e){
        this.props.clear()
    }
}

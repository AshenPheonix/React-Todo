// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo'
import list from '../../dbs/tasks'
import TodoForm from './TodoForm'

export default class TodoList extends Component {
    render() {
        return (
            <section className="taskList">
                {list.map((task)=>(
                    <Todo
                        completed={task.completed}
                        task={task.task}
                        key={task.id}
                    />
                )}
            </section>
            <section className="taskDrawer">
                <TodoForm
                    submit={this.add}
                />
            </section>
        )
    }
}

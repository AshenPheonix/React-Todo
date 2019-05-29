import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
    render() {
        return (
            <section>
                <input type="checkbox" checked={this.props.completed}>: {this.props.task}</input>
            </section>
        )
    }
}

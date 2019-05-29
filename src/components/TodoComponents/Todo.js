import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.toggle=this.toggle.bind(this)
    }
    
    render() {
        return (
            <section>
                <input type="checkbox" checked={this.props.completed} onChange={this.toggle} />: {this.props.task}
            </section>
        )
    }

    toggle(e){
        this.props.edit(this.props.key)
    }
}

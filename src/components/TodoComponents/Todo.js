import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.toggle=this.toggle.bind(this)
    }
    
    render() {
        let classlist='todo'
        if(this.props.completed===true)
            classlist+=' complete'
        return (
            <section 
                onClick={this.toggle}
                className={classlist}
            >
                {this.props.task}
            </section>
        )
    }

    toggle(e){
        this.props.edit(this.props.id)
    }
}

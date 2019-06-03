import React, { Component as C } from 'react'
import './Todo.css'

export default class extends C {
    render() {
        let classlist='todo'
        if(this.props.completed===true)
            classlist+=' complete'
        return (
            <section 
                onClick={ ()=> this.props.edit(this.props.id) }
                className={classlist}
            >
                { this.props.task }
            </section>
        )
    }
}
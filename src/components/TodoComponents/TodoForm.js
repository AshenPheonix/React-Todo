import React, { Component } from 'react'

export default class Drawer extends Component {
    render() {
        return (
            <form onSubmit={this.props.submit}>
                <label>
                    New Task: 
                    <input type="text" onChange={this.props.formChange} value={this.props.name} placeholder="New Task" />
                </label>
                <section>
                    <button
                        type="submit"
                    >
                        Submit
                    </button>
                    <button onClick={()=>this.props.clear()} type="button">Clear Completed</button>
                </section>
            </form>
        )
    }
}

import React, { Component } from 'react'

export default class Drawer extends Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    New Task: 
                    <input type="text" onChange={this.formEdit} value={this.props.name} placeholder="New Task" />
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
    handleSubmit=e=>{
        e.preventDefault();
        this.props.submit({
            task:this.props.name,
            id:Math.round(Math.random()*100000 + 1),
            completed:false
        })
    }
    formEdit=e=>{
        if(e.key==='Enter')
            this.handleSubmit()
        else
            this.props.formChange(e)
    }
    
}

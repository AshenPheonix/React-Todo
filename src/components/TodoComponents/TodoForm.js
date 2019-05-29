import React, { Component } from 'react'

export default class Drawer extends Component {
    constructor(props) {
        super(props)
        
        this.state={
            name:''
        }

        this.handleSubmit=this.handleSubmit.bind(this)
        this.formEdit=this.formEdit.bind(this)
        this.clear=this.clear.bind(this)
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    New Task: 
                    <input type="text" onChange={this.formEdit} value={this.state.name} placeholder="New Task" />
                </label>
                <button
                    type="submit"
                >
                    Submit
                </button>
                <button onClick={this.clear} type="button">Clear Completed</button>
            </form>
        )
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.submit({
            task:this.state.name,
            id:Math.round(Math.random()*100000 + 1),
            completed:false
        })
        this.setState({name:''})
    }
    formEdit(e){
        if(e.key==='Enter')
            this.handleSubmit()
        else
            this.setState({name:e.target.value})
    }
    clear(e){
        this.props.clear();
    }
}

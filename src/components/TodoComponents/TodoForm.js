import React, { Component } from 'react'

export default class Drawer extends Component {
    constructor(props) {
        super(props)
        
        this.state={
            name:''
        }

        this.handleSubmit=this.handleSubmit.bind(this)
        this.formEdit=this.formEdit.bind(this)
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
                />
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
    }
    formEdit(e){
        if(e.key==='Enter')
            this.handleSubmit()
        else
            this.setState({name:e.target.value})
    }
}

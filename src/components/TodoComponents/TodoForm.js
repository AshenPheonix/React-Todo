import React, { Component } from 'react'

export default class Drawer extends Component {
    constructor(props) {
        super(props)
        
        this.state={
            name:''
        }

        this.submit=this.submit.bind(this)
        this.formEdit=this.formEdit.bind(this)
    }
    
    render() {
        return (
            <form onSubmit={this.submit}>
                <label>
                    New Task: 
                    <input 
                        type='text'
                        onKeyUp={this.formEdit}
                        value={this.state.name}
                        placeholder="New Task"
                    />
                </label>
                <submit
                />
            </form>
        )
    }
    submit(e){
        e.preventDefault();
        this.props.submit({
            task:'',
            id:Math.round(Math.random()*100000 + 1),
            completed:false
        })
    }
    formEdit(e){
        if(e.key==='Enter')
            this.submit()
        else{
            this.setState({name:e.currentTarget.value})
        }
    }
}

import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import List from './dbs/tasks'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state={
      list:List
    }

    this.add=this.add.bind(this)
    this.clear=this.clear.bind(this)
    this.edit=this.edit.bind(this)
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          list={this.state.list}
          add={this.add}
          clear={this.clear}
          edit={this.edit}
        />
      </div>
    );
  }

  add(e){
    let temp=this.state.list.map(i=>i)
    temp.push(e)
    localStorage.setItem('tasks',JSON.stringify(temp))
    this.setState({list:temp})
  }

  componentDidMount(){
    // if(localStorage.getItem('tasks'))
    //   this.setState({list:JSON.parse(localStorage.getItem('tasks'))})
  }
  
  clear(){
    let temp=this.state.list.map(i=>i).filter(i=>i.completed===false)
    this.setState({list:temp})
  }

  edit(item){
    let temp=this.state.list.map(i=>(i.id!==item)?i:{task:i.task,id:i.id,completed:!i.completed})
    this.setState({list:temp})
  }
}

export default App;

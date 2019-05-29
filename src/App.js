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
        />
      </div>
    );
  }

  add(e){
    console.log('yo')
    let temp=this.state.list.map(i=>i)
    temp.push(e)
    this.setState({list:temp})
  }
}

export default App;

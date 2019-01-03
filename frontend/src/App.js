import React, { Component } from 'react';
import TodoBar from './components/TodoBar'
import TodoList from './components/TodoList'

const API = 'http://localhost:8000/api/todos/Bean1'

class App extends Component {
  state = {
    isLoaded: false,
    data: null
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(
      data => this.setState({
        todos: data,
        isLoaded: true
      })
      
    )
    .catch(error => console.error(error))
  }

  render() {
    return (
      <div>
        <TodoBar />

        {this.state.isLoaded && <TodoList todos={this.state.todos}/>}
      </div>
    );
  }
}

export default App;

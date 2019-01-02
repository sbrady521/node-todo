import React, { Component } from 'react';
import TodoBar from './components/TodoBar'

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
        data: data,
        isLoaded: true
      })
      
    )
    .catch(error => console.error(error))
  }

  render() {
    if(this.state.isLoaded) {
      console.log(this.state.data)
    }
    return (
      <div>
        <TodoBar />
      </div>
    );
  }
}

export default App;

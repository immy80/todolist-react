import React, { Component } from 'react';

export default class App extends Component {
  state = {
    currentList: [],
    newList: [],
  };

  newItem = (event) => {
    this.setState({
      currentList: event.target.value,
    });
  };

  addToList = () => {
    this.setState({
      newList: [...this.state.newList, this.state.currentList],
    });
  };
  render() {
    const Lists = this.state.newList.map((list) => {
      return <h1>{list}</h1>;
    });
    return (
      <div>
        <h1>React Todo List</h1>
        <input onChange={(event) => this.newItem(event)} type='text' />
        <button onClick={this.addToList}>Add</button>
        {Lists}
      </div>
    );
  }
}

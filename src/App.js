import React, {Component} from 'react';
import './App.css';
import TodoText from './components/TodoText';

class App extends Component {
  constructor() {
    super();
    this.TodoTexts = [
      { title: "Go to school", isComplete: true },
      { title: "Reading book", isComplete: false },
      { title: "Learning English", isComplete: false },
      { title: "Practice React", isComplete: false },
      { title: "Relax time", isComplete: true },
    ];
  }
  render() {
    return (
      <div className="App">
        { this.TodoTexts.map((item, index) => <TodoText key={index} item={item} />) }
      </div>
    );
  }
}

export default App;

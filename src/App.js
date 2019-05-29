import React, {Component} from 'react';
import './App.css';
import TodoText from './components/TodoText';

class App extends Component {
  constructor() {
    super();
    this.TodoTexts = [
      { title: "Go to school" },
      { title: "Reading book" },
      { title: "Learning English" },
      { title: "Practice React" },
      { title: "Relax time" },
    ];
  }
  render() {
    return (
      <div className="App">
        { 
          (this.TodoTexts.length > 0) && this.TodoTexts.map((item, index) => 
            <TodoText key={index} item={item} />)
        }
        { 
          (this.TodoTexts.length === 0) && "Nothing to do." 
        }
      </div>
    );
  }
}

export default App;

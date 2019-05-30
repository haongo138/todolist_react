import React, {Component} from 'react';
import './App.css';
import './components/TodoText.css';
import TodoText from './components/TodoText';
import checkAllImg from './img/target.svg';
import uncheckAllImg from './img/target_uncheck.svg';
import addBtn from './img/add.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      allChecked: false,
      inputText: "",
    };
    this.TodoTexts = [
      { title: "Go to school" },
      { title: "Reading book" },
      { title: "Learning English" },
      { title: "Practice React" },
      { title: "Relax time" },
    ];
    this.handleEventClick = this.handleEventClick.bind(this);
    this.handleInputOnChange = this.handleInputOnChange.bind(this);
  }
  handleEventClick() {
    this.setState((prevState) => ({ allChecked: !prevState.allChecked }));
  }
  handleInputOnChange(event) {
    if(event.keyCode === 13) {
      let text = event.target.value;
      if (text.trim() === "") {
        return;
      }
      this.TodoTexts.push({ title: text });
      event.target.value = "";
      this.setState({});
    }
  }
  render() {
    let imgUrl = uncheckAllImg;
    if(this.state.allChecked) {
      imgUrl = checkAllImg;
    }
    return (
      <div className="App">
        <div className="item inputbar">
          <img onClick={this.handleEventClick} src={imgUrl} width="32" alt=""></img>
          <input onKeyUp={this.handleInputOnChange} type="text" placeholder="Add new work ..." name="inputText"></input>
        </div>  
        
        {/* condition rendering */}
        { 
          (this.TodoTexts.length > 0) && this.TodoTexts.map((item, index) => <TodoText key={index} item={item} itemState={this.state.allChecked} />)
        }
        { 
          (this.TodoTexts.length === 0) && "Nothing to do." 
        }
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import './TodoText.css';
import classnames from 'classnames';
import checkedImg from '../img/checked.svg';
import uncheckImg from '../img/uncheck.svg';

class TodoText extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.onItemClicked = this.onItemClicked.bind(this);
  }
  handleParentState() {
    this.setState({ isClicked: this.props.itemState })
  }
  onItemClicked() {
    this.setState((prevState) => ({ isClicked: !prevState.isClicked }));
  }

  render() {
    let imgUrl = uncheckImg;
    let stateIcon = "state-icon";
    if(this.state.isClicked || this.props.itemState ) {
      imgUrl = checkedImg;
    }
    let itemClass = classnames(
      { 'item': true },
      { 'item-complete': this.state.isClicked || this.props.itemState},
    );
    return (
      <div className={itemClass}>
        <img onClick={this.onItemClicked} className={stateIcon} src={imgUrl} width={20} alt=""></img>
        <p>{ this.props.item.title }</p>
      </div>
    )
  }
}

export default TodoText;
import React, {Component} from 'react';
import './TodoText.css';
import classnames from 'classnames';

class TodoText extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.onItemClicked = this.onItemClicked.bind(this);
  }

  onItemClicked() {
    this.setState((prevState) => ({ isClicked: !prevState.isClicked }));
  }

  render() {
    let itemClass = classnames(
      { 'item': true },
      { 'item-complete': this.state.isClicked },
    );
    return (
      <div className={itemClass} onClick={this.onItemClicked}>
        <p>{ this.props.item.title }</p>
      </div>
    )
  }
}

export default TodoText;
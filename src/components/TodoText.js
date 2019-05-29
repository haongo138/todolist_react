import React, {Component} from 'react';
import './TodoText.css';
import classnames from 'classnames';

class TodoText extends Component {
  render() {
    const { item } = this.props;
    let itemClass = classnames(
      { 'item': true },
      { 'item-complete': item.isComplete },
    );
    return (
      <div className={itemClass}>
        <p>{ this.props.item.title }</p>
      </div>
    )
  }
}

export default TodoText;
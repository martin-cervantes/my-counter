import React from 'react';
import { connect } from 'react-redux';
import { counterIncrement, counterDecrement } from '../actions';

import Button from '../components/Button';
import Display from '../components/Display';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.dispatch(counterIncrement());
  }

  decrement() {
    this.props.dispatch(counterDecrement());
  }

  render() {
    return (
      <div class="counter">
        <h2 class="title">Counter</h2>
        <div class="countainer">
          <Button text="-" clickHandle={this.decrement} />
          <Display text={this.props.count} />
          <Button text="+" clickHandle={this.increment} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);

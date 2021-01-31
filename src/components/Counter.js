import { Component } from 'react';
// imrc
// cc
class Counter extends Component {
    state = {
        counter: 0
    }
    handleIncrement = () => {
        this.setState({ counter: this.state.counter + 1 });
    }
    handleDecrement = () => {
        this.setState({ counter: this.state.counter - 1 });
    }
    handleReset = () => {
        this.setState({ counter: 0 });
    }
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <div>
                    <button onClick={this.handleIncrement}>+</button>
                    <button onClick={this.handleReset}>reset</button>
                    <button onClick={this.handleDecrement}>-</button>
                </div>
            </div>
        );
    }
}

export default Counter;
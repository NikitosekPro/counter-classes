import { Component } from "react";

export class Counter extends Component {
  state = {
    counterData: 0,
  };

  addValue = () => {
    // this.state.counterData =  +1 // так змінювати стaн НЕ можна
    //   для зміни стану використовують метод this.setState()
    this.setState({ counterData: 5 });
  };

  render() {
    return (
      <div>
        <p>Counter Value: {this.state.counterData}</p>
        <button onClick={this.addValue}>Increase value</button>
        <button>Decrease value</button>
      </div>
    );
  }
}

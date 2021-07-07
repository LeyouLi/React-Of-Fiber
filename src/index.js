import React, { render, Component } from './react';

const root = document.getElementById('root');

const jsx = (
  <div>
    <p>Hello React</p>
    <p>Hello Fiber</p>
  </div>
);

// render(jsx, root); 

// setTimeout(() => {
//   const jsx = (
//     <div>
//       <div>Text Change</div>
//       <p>Hello Fiber</p>
//     </div>
//   );

//   render(jsx, root);
// }, 2000);
class Greating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '123'
    }
  }
  render() {
    return <div>
      {this.props.title} Class Component Test {this.state.name}
      <button onclick={() => this.setState({name : '456'})}>切换 Name</button>
    </div>    
  }
}

render(<Greating title="test"/>, root);

function FnComponent (props) {
  return <div>{props.title} Class FnComponent Test</div>
}

// render(<FnComponent title='test'/>, root);
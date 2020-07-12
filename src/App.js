import React, { Component } from 'react';

import './App.css';


class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {
        name: "Tiago Ribeiro"
    }

    this.changestate = this.changestate.bind(this);
    this.resetstate = this.resetstate.bind(this);
}

changestate(){
  this.setState({
    name: "Tiago Mudança de State"
  })
}

resetstate(){
  this.setState({
    name: "Tiago Ribeiro"
  })
}
render() {
  return (
    <div className="App">
      <div>
        <button onClick={this.changestate}>Mudar ESTADO</button>
        <button onClick={this.resetstate}>Resetar ESTADO</button>
      </div>
      {this.state.name}
    </div>
  );
}
}

export default App;

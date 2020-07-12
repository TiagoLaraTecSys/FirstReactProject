import React, { Component } from 'react';

import './App.css';


class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {
        name: "Tiago Ribeiro",
        email: "laratecsys@gmail.com",

    }

    this.changestate = this.changestate.bind(this);
    this.resetstate = this.resetstate.bind(this);
    this.changeinput = this.changeinput.bind(this);
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

changeinput(event){
  let target = event.target
  let index  = target.name
  this.setState({
    [index]: target.value
  })
}

render() {
  return (
    <div className="App">
      <div>
        <button onClick={this.changestate}>Mudar ESTADO</button>
        <button onClick={this.resetstate}>Resetar ESTADO</button>
      </div>
      <div>
        <form>
          <label>Nome
            <input  type="text" name="name" value={this.state.name} onChange={this.changeinput}>
            </input>
          </label>
          <label>Email 
            <input type="email" name="email" value={this.state.email} onChange={this.changeinput}>
            </input>            
          </label>
        </form>
        {this.state.name} - {this.state.email}
      </div>
      
    </div>
  );
}
}

export default App;

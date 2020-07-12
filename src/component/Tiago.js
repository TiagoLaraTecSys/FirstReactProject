import React, { Component } from 'react';
import User from './User';
import photo from '../userfoto.png'
class Tiago extends Component{
    render(){
        return(
            <div>
                <p>Meu componente chamado Tiago</p>
                <User name="Tiago" photo={photo}></User>
                <User name="Andrea"></User>
            </div>
        );
    }
}

export default Tiago;
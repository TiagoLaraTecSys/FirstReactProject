import React, { Component } from 'react';

class Users extends Component{
    render(){
        return(
            <div>
                <div>
                    Nome: {this.props.name}
                </div>
                <div>
                    Foto: <img src={this.props.photo} alt="Img"/>
                </div>
            </div>
        );
    }
}

export default Users;
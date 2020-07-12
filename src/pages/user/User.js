import React ,{Component} from 'react'
import UserForm from './UserForm';
import { connect } from 'react-redux'
class User extends Component{

    render(){
        let listUser = [
            {name:"Tiago de Lara Ribeiro", email:"laratecsys@gmail.com"},
            {name:"Andrea Quadros de Lara", email:"andreaqlr73@gmail.com"}
        ]
        return(
            <div>
                <UserForm></UserForm>
                <table border="10">
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                    {listUser.map((item) => {
                        return <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    })}
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(User);

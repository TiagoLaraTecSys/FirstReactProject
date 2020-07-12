import React, { Component } from 'react'

class List extends Component{

    render(){
        let list = [
            {   name: "tiago ribeiro",
                email: "laratecsys@gmail.com"
            },
            {
                name: "Tiago de Lara Ribeiro",
                email: "tiagoalraribeiro1998@gmail.com"
            }
        ]
        return(
            <div>
                <table border="10">
                <tr>
                    <th>name</th>
                    <th>email</th>
                </tr>
                {list.map((item) => {
                    return <tr>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.email}
                        </td>
                    </tr>
                })}
                </table>
            </div>
        );
    }

}

export default List;
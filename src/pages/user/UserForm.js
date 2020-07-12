import { connect } from "react-redux";
import React from 'react'
const { reduxForm } = require("redux-form");

const UserFormFun = props =>{
    return(
        <form>
            <label>Name</label>
            <input type="text" componente="input" name="name"/>
            <label>Email</label>
            <input type="email" componente="input" name="email"/>
        </form>
    );
}

const UserForm = (reduxForm({
    form: "formUser"
}))(UserFormFun)

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(UserForm)
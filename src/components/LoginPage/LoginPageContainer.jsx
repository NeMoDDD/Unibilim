import React from "react";
import {connect} from "react-redux";
import {login, setUserName, setUserPassword, setUserToken} from "../../redux/loginReducer";
import LoginPage from "./LoginPage";

const mapStateToProps = (state) => {
    return {
        userRole: state.loginReducer.userRole,
        token: state.loginReducer.token,
        userName: state.loginReducer.userName,
        password: state.loginReducer.password
    }
}

export default connect(mapStateToProps, {setUserName, setUserPassword, setUserToken, login})(LoginPage)

import React from 'react';
import '../SideBar/SideBar.scss'
import {connect} from "react-redux";
import {setUserRole} from "../../redux/loginReducer";
import {NavLink} from "react-router-dom";

const Home = (props) => {
    return (
        <div className='homepage'>
            <NavLink className='about-me' to="/teachlk" onClick={() => props.setUserRole("teacher")}>Личный кабинет учителя</NavLink>
            <NavLink className='about-me' to="/studlk" onClick={() => props.setUserRole("student")}>Личный кабинет ученика</NavLink>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        userRole: state.loginReducer.userRole
    }
}
export default connect(mapStateToProps, {setUserRole})(Home);

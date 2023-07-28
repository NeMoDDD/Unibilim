import React from "react";
import {connect} from "react-redux";
import {
    setBirthday,
    setCity,
    setDistrict,
    setEmail,
    setInputDisabled,
    setLocation,
    setName,
    setPhone,
    setRegion,
    setSurname
} from "../../store/MyCabReducer";
import TeacherCabinet from "./TeacherCabinet";

const mapStateToProps = (state) => {
    return {
        isInputDisabled: state.MyCabReducer.isInputDisabled,
        name: state.MyCabReducer.name,
        surname: state.MyCabReducer.surname,
        dayOfBirthday: state.MyCabReducer.dayOfBirthday,
        email: state.MyCabReducer.email,
        phone: state.MyCabReducer.phone,
        location: state.MyCabReducer.location,
        city: state.MyCabReducer.city,
        region: state.MyCabReducer.region,
        district: state.MyCabReducer.district
    }
}

export default connect(mapStateToProps, {setInputDisabled, setName, setSurname, setBirthday, setEmail,
    setPhone, setLocation, setCity, setRegion, setDistrict})(TeacherCabinet)

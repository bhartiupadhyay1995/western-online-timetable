import React from "react";
import logo from '../images/Western_Logo.jpg'

export default class Header extends React.Component {


    render() {
        return (
                <div className="page-header">
                <h2>
                    <img src={logo} alt="Western logo"/>Undergraduate Fall/Winter Academic Timetable 2020/2021
                    <div className="resizeSmall"></div>
                </h2>
            </div>
        );
    }
}

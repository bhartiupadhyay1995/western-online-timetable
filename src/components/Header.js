import React from "react";
import logo from '../images/Western_Logo.jpg';
import '../styles/Header.css';

export default class Header extends React.Component {


    render() {
        return (
            <div className="page-header">
                <img src={logo} alt="Western logo"/>
                <p>Undergraduate Fall/Winter Academic Timetable 2020/2021</p>
            </div>
        );
    }
}

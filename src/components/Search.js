import React from "react";
import { Dropdown,Checkbox } from 'semantic-ui-react'
import '../styles/search.css';
// import CardCarousel from "./CardCarousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import anylogo from '../images/western.jpg'
import huronlogo from '../images/Huron-Logo.png'
import westernlogo from '../images/westernLogo.png'
import kingslogo from '../images/kings.png'
import bresciaca from '../images/brescia.png'
import CourseCode from './CourseCode'


export default class Search extends React.Component {

    constructor() {
        super()
        this.state = {
            subjects: [],
            components: [],
            campuses: [],
            courseTypes: [],
            designations: [],
            days: [],
            start_times: [],
            end_times: [],
            subjectChange: " ",
            courseCodes: [],
            subjectInfo: '',
            componentInfo: '',
            campuseInfo: '',
            courseTypeInfo: '',
            designationInfo: '',
            daysInfo: [],
            start_timeInfo: '',
            end_timeInfo: '',
            courseCodeInfo: '',
            enrollInfo: true,
            logos:[anylogo,kingslogo, huronlogo,westernlogo,bresciaca]
        } 
    }

    days = []

    //Get all the data from getTimetableSchema api to get dispalayed in search components
    componentDidMount() {
        fetch('http://localhost:8080/timetable/getTimetableSchema')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    subjects: json.timeTableInfoJson.subject.map(subject => (
                        {
                            key: subject.subject_id,
                            text: subject.subject_value,
                            value: subject.subject_id

                        }))
                    ,
                    components: json.timeTableInfoJson.Component.map(component => (
                        {
                            key: component.Component_id,
                            text: component.Component_value,
                            value: component.Component_value,

                        })),
                    campuses: json.timeTableInfoJson.Campus.map((campus,index) => (
                        {
                            key: campus.Campus_id,
                            text: campus.Campus_value,
                            value: campus.Campus_value,
                            image: {avatar: true, src:this.state.logos[index]}

                        })),
                    courseTypes: json.timeTableInfoJson.CourseType.map(courseType => (
                        {
                            key: courseType.CourseType_id,
                            text: courseType.CourseType_value,
                            value: courseType.CourseType_value,

                        })),
                    designations: json.timeTableInfoJson.Designation.map(Designation => (
                        {
                            key: Designation.Designation_id,
                            text: Designation.Designation_value,
                            value: Designation.Designation_value,

                        })),
                    days: json.timeTableInfoJson.day,
                    start_times: json.timeTableInfoJson.start_time.map((start, index) => (
                        {
                            key: index,
                            text: start,
                            value: start,

                        })),
                    end_times: json.timeTableInfoJson.end_time.map((end, index) => (
                        {
                            key: index,
                            text: end,
                            value: end,

                        }))

                })
            }).catch((err) => {
                console.log(err);
            });

    }

    handleOnChange = (e, data) => {      
        this.setState({ subjectInfo: data.value });
        fetch('http://localhost:8080/timetable/getAllCourse')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    courseCodes: json.coursecodes.map(code => (
                        {
                            key: code.course_code_id,
                            text: code.description + " " + code.course_code_id,
                            value: code.course_code_id

                        }))
                    ,
                })
            }).catch((err) => {
                console.log(err);
            });
    }

    updateDays = (e) => {
        this.days.push(e.target.value);
    }

    controlEnrollStatus = (e) => {
        this.setState({enrollInfo: e.target.checked})
    }

    getQuerydata = (e) => {
        e.preventDefault();
        const querydata = {
            subject: this.state.subjectInfo,
            start_time: this.state.start_timeInfo,
            end_time: this.state.end_timeInfo,
            campus: this.state.campuseInfo,
            days:this.days,
            component: this.state.componentInfo,
            course_code: this.state.courseCodeInfo,
            designation: this.state.designationInfo,
        }

        if(!this.state.enrollInfo) querydata['enrl_stat'] = 'Full';
        for(const property in querydata){
            if(querydata[property] === '' || querydata[property].length === 0){
                delete querydata[property];
            }
        }
        this.props.onSubmit(querydata)
    }

    render() {
        const { subjects, components, campuses, courseTypes, designations, days, start_times, end_times } = this.state;
        return (
            <form className="ui form">
                
                
                <div className="ui four column stackable grid container">
                    
                    <div className="column">
                        <h4> Subject:</h4>
                        <Dropdown
                            placeholder='Choose Subject'
                            fluid
                            search
                            selection
                            options={subjects}
                            // onChange={this.handleOnChange}
                        />
                    </div>
                    <CourseCode/>

                    <div className="column">
                        <h4> Course Suffix:</h4>
                        <Dropdown
                            placeholder='Select Course Suffix'
                            fluid
                            search
                            selection
                            options={designations}
                            onChange={(e, data) => this.setState({ designationInfo: data.value })}
                        />
                    </div>
                    <div className="column">
                        <h4> Course Delivery:</h4>
                        <Dropdown
                            placeholder='Select Course Delivery'
                            fluid
                            search
                            selection
                            options={courseTypes}
                            onChange={(e, data) => this.setState({ courseTypeInfo: data.value })}
                        />
                    </div>
                    <div className="column">
                        <h4> Component</h4>
                        <Dropdown
                            placeholder='Select Component'
                            fluid
                            search
                            selection
                            options={components}
                            onChange={(e, data) => this.setState({ componentInfo: data.value })}
                        />
                    </div>
                    <div className="column">
                    <h4> Campus</h4>
                    {/* <CardCarousel /> */}

                        
                        <Dropdown
                            placeholder='Select Campus'
                            fluid
                            search
                            selection
                            options={campuses}
                            onChange={(e, data) => this.setState({ campuseInfo: data.value })}
                        />
                    </div>
                    <div className="column">
                        <h4> Start Time</h4>
                        <Dropdown
                            placeholder='Select Start Time'
                            fluid
                            search
                            selection
                            options={start_times}
                            onChange={(e, data) => this.setState({ start_timeInfo: data.value })}
                        />
                    </div>
                    <div className="column">
                        <h4> End Time</h4>
                        <Dropdown
                            placeholder='Select End Time'
                            fluid
                            search
                            selection
                            options={end_times}
                            onChange={(e, data) => this.setState({ end_timeInfo: data.value })}
                        />
                    </div>
                    <div className="column">
                        <h4>Day of Class</h4>
                        {days.map((day, index) => (
                            <Checkbox label={{ children: day }} 
                            onChange={this.updateDays}
                            value = {day}
                            key={day}/>
                        ))}
                    </div>

                    <div className="column">
                        <div className="ui checkbox">
                            <input type="checkbox"  
                            onChange={this.controlEnrollStatus}
                            checked={this.state.enrollInfo}
                            />
                            <label>Show only courses open for registration.
                        *Note: may not be an accurate reflection during paper add/drop.</label>
                        </div>
                    </div>


                    <div className="row" >
                        <button className="ui teal labeled icon button" onClick={this.getQuerydata}>SUBMIT</button>
                    </div>
                </div>
            </form >

        );
    }
}

import React from "react";
import { Dropdown } from 'semantic-ui-react'
import CourseCode from "./CourseCode";


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
            courseCodeInfo: ''

        }
    }



    //Get all the data from getTimetableSchema api to get dispalayed in search components
    componentDidMount() {
        fetch('http://localhost:8080/getTimetableSchema')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    subjects: json.schema.subject.map(subject => (
                        {
                            key: subject.subject_id,
                            text: subject.subject_value,
                            value: subject.subject_id

                        }))
                    ,
                    components: json.schema.Component.map(component => (
                        {
                            key: component.Component_id,
                            text: component.Component_value,
                            value: component.Component_value,

                        })),
                    campuses: json.schema.Campus.map(campus => (
                        {
                            key: campus.Campus_id,
                            text: campus.Campus_value,
                            value: campus.Campus_value,

                        })),
                    courseTypes: json.schema.CourseType.map(courseType => (
                        {
                            key: courseType.CourseType_id,
                            text: courseType.CourseType_value,
                            value: courseType.CourseType_value,

                        })),
                    designations: json.schema.Designation.map(Designation => (
                        {
                            key: Designation.Designation_id,
                            text: Designation.Designation_value,
                            value: Designation.Designation_value,

                        })),
                    days: json.schema.day,
                    start_times: json.schema.start_time.map((start, index) => (
                        {
                            key: index,
                            text: start,
                            value: start,

                        })),
                    end_times: json.schema.end_time.map((end, index) => (
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
        console.log(data.value);
        // this.setState({ subjectChange:data.value });
        // console.log(this.state.subjectChange);
        this.setState({ subjectInfo: data.value });
        fetch('http://localhost:8080/getCourseCode/' + data.value)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    courseCodes: json.course_codes.map(code => (
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

    getCourseCode(subjectid) {

    }

    getQuerydata = () => {
        const querydata = {
            subject: this.state.subjectInfo,
            start_time: this.state.start_timeInfo,
            end_time: this.state.end_timeInfo,
            campus: this.state.campuseInfo,
            // days: timeTableInfoJson.day,
            component: this.state.componentInfo,
            course_code: this.state.courseCodeInfo,
            designation: this.state.designationInfo,
            // enrl_stat: "Not full"
        }
        this.props.onSubmit(querydata)
    }

    render() {
        const { subjects, components, campuses, courseTypes, designations, days, start_times, end_times, courseCodes } = this.state;


        return (
            <div class="ui center aligned basic segment">
                <form class="ui form">
                    <div class="equal width fields">
                        <div class="field">
                            <label> Choose Subject</label>
                            <Dropdown
                                placeholder='Select Country'
                                search
                                selection
                                options={subjects}
                                onChange={this.handleOnChange}
                            />
                        </div>
                        <div class="field">
                            <label> Choose Course Number:</label>
                            <Dropdown
                                placeholder='Select Country'
                                search
                                selection
                                options={courseCodes}
                                onChange={(e, data) => this.setState({ courseCodeInfo: data.value })}
                            />
                        </div>
                    </div>
                    <div class="equal width fields">
                        <div class="field">
                            <label>Course Suffix</label>
                            <Dropdown
                                placeholder='Select Country'
                                search
                                selection
                                options={designations}
                                onChange={(e, data) => this.setState({ designationInfo: data.value })}
                            />
                        </div>


                        <div class="field">
                            <label>Course Delivery</label>
                            <Dropdown
                                placeholder='Select Country'
                                search
                                selection
                                options={courseTypes}
                                onChange={(e, data) => this.setState({ courseTypeInfo: data.value })}
                            />
                        </div>
                    </div>

                    <div class="equal width fields">

                        <div class="field">
                            <label>Component</label>
                            <Dropdown
                                placeholder='Select Country'
                                search
                                selection
                                options={components}
                                onChange={(e, data) => this.setState({ componentInfo: data.value })}
                            />
                        </div>

                        <div class="field">
                            <label>Campus</label>
                            <Dropdown
                                placeholder='Select Country'
                                search
                                selection
                                options={campuses}
                                onChange={(e, data) => this.setState({ campuseInfo: data.value })}
                            />
                        </div>
                    </div>
                    <div class="equal width fields">
                        <div class="field">
                            <label>Start Time</label>
                            <Dropdown
                                placeholder='Select Country'
                                search
                                selection
                                options={start_times}
                                onChange={(e, data) => this.setState({ start_timeInfo: data.value })}
                            />
                        </div>

                        <div class="field">
                            <label>End Time</label>
                            <Dropdown
                                placeholder='Select Country'
                                search
                                selection
                                options={end_times}
                                onChange={(e, data) => this.setState({ end_timeInfo: data.value })}
                            />
                        </div>
                    </div>
                    <div class="inline fields">
                        <label>Day of Class</label>

                        <div class="field" >
                            {days.map((day, index) => (
                                <label key={index}>
                                    <input type="checkbox" key={"inputDay" + index} /> {day}
                                    <span> &nbsp;</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui checkbox">
                            <input type="checkbox" class="hidden" />
                            <label>Show only courses open for registration.
                        *Note: may not be an accurate reflection during paper add/drop.</label>
                        </div>
                    </div>
                    <div class="ui teal labeled icon button" onClick={this.getQuerydata}>
                        Submit
                </div>

                </form >
            </div>
        );
    }
}

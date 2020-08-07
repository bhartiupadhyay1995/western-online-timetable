import React from "react";
import { Dropdown } from 'semantic-ui-react'


export default class Story extends React.Component {

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
            countryOptions: []

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
                            key: subject.subject_value,
                            text: subject.subject_value,
                            value: subject.subject_value,

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



    render() {
        const { subjects, components, campuses, courseTypes, designations, days, start_times, end_times, countryOptions } = this.state;
        console.log(subjects);
        var subjectsnew = []
        subjectsnew = subjects.map(subject => (
            {
                key: subject.subject_value,
                text: subject.subject_value,
            }
        ))

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
                        />
                    </div>

                    <div class="field">
                        <label> Choose Course Number:</label>
                        <Dropdown
                            placeholder='Select Country'
                            search
                            selection
                            options={subjects}
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
                        />
                    </div>


                    <div class="field">
                        <label>Course Delivery</label>
                        <Dropdown
                            placeholder='Select Country'
                            search
                            selection
                            options={courseTypes}
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
                        />
                    </div>

                    <div class="field">
                        <label>Campus</label>
                        <Dropdown
                            placeholder='Select Country'
                            search
                            selection
                            options={campuses}
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
                        />
                    </div>

                    <div class="field">
                        <label>End Time</label>
                        <Dropdown
                            placeholder='Select Country'
                            search
                            selection
                            options={end_times}
                        />
                    </div>
                </div>
                <div class="inline fields">
                    <label>Day of Class</label>

                    <div class="field" >
                        {days.map((day, index) => (
                            <label>
                                <input type="checkbox" key={"inputDay" + index} /> {day}
                                <span> &nbsp;</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div class="field">
                    <div class="ui checkbox">
                        <input type="checkbox" class="hidden" readonly="" tabindex="0" />
                        <label>Show only courses open for registration.
                        *Note: may not be an accurate reflection during paper add/drop.</label>
                    </div>
                </div>
                <div class="ui teal labeled icon button">
                    Submit   
                </div>
                {/* <div className="course-label">
                    <select>{designations.map(designation => (
                        <option key={designation.Designation_id} value="String">{designation.Designation_value}</option>
                    ))}
                    </select>
                </div>
                <div className="courseNum-label">Course Number:</div>
                <div className="courseDelType-label">Course Delivery Type:
                     <select>{courseTypes.map(courseType => (
                    <option key={courseType.CourseType_id} value="String">{courseType.CourseType_value}</option>
                ))}
                    </select>
                </div>
                <div className="component-label">Component:
                     <select>{components.map(component => (
                    <option key={component.Component_id} value="String">{component.Component_value}</option>
                ))}
                    </select>
                </div>
                <div className="startTime-label">Starting Time:
                    <select>{start_times.map((start_time, index) => (
                    <option key={"inputStartTime" + index} value="String">{start_time}</option>

                ))}
                    </select>
                </div>
                <div className="endTime-label">Ending Time:
                    <select>{end_times.map((end_time, index) => (
                    <option key={"inputEndTime" + index} value="String">{end_time}</option>

                ))}
                    </select>
                </div>
                <div className="dayofClass-label">Day of class:
                    <select>{days.map((day, index) => (
                    <option key={"inputDay" + index} value="String">{day}</option>

                ))}
                    </select>
                </div>
                <div className="campus-label">Campus:
                    <select>{campuses.map(campus => (
                    <option key={campus.Campus_id} value="String">{campus.Campus_value}</option>
                ))}
                    </select> */}
                {/* </div> */}
            </form >
            </div>


        );
    }
}

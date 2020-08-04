import React from "react";

export default class Story extends React.Component {

    constructor() {
        super()
        this.state = {
            subjects: [],
            components: [],
            campuses: [],
            courseTypes: [],
            designations:[],
            days:[],
            start_times:[],
            end_times:[]


        }
    }
    //To Get all stories from the api
    componentDidMount() {
        fetch('http://localhost:8080/getTimetableSchema')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    subjects: json.schema.subject,
                    components: json.schema.Component,
                    campuses: json.schema.Campus,
                    courseTypes: json.schema.CourseType,
                    designations: json.schema.Designation,
                    days:json.schema.day,
                    start_times:json.schema.start_time,
                    end_times:json.schema.end_time

                })
            }).catch((err) => {
                console.log(err);
            });

    }

    render() {
        const { subjects, components, campuses, courseTypes,designations,days,start_times,end_times } = this.state;
        console.log(this.state.designations)
        return (
            <div className="App">
                {/* <form onSubmit={this.handleSubmit}></form> */}
                <div className="search-components">
                    <div className="subject-label">Subject:
                     <select>{subjects.map(subject => (
                        <option key={subject.subject_id} value="String">{subject.subject_value}</option>
                    ))}
                        </select>
                    </div>
                    <div className="course-label">Course Suffix:
                    <select>{designations.map(designation => (
                        <option key={designation.Designation_id} value="String">{designation.Designation_value}</option>
                    ))}
                        </select></div>
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
                        </select> </div>
                    <div className="startTime-label">Starting Time:
                    <select>{start_times.map((start_time,index) => (
                        <option key={"inputStartTime"+index} value="String">{start_time}</option>
                        
                    ))}
                        </select>
                        </div>
                    <div className="endTime-label">Ending Time:
                    <select>{end_times.map((end_time,index) => (
                        <option key={"inputEndTime"+index} value="String">{end_time}</option>
                        
                    ))}
                        </select></div>
                    <div className="dayofClass-label">Day of class:
                    <select>{days.map((day,index) => (
                        <option key={"inputDay"+index} value="String">{day}</option>
                        
                    ))}
                        </select>
                        </div>
                    <div className="campus-label">Campus:
                    <select>{campuses.map(campus => (
                        <option key={campus.Campus_id} value="String">{campus.Campus_value}</option>
                    ))}
                        </select>
                        </div>





                </div>
            </div>
        );
    }
}

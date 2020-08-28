import React from "react";
import { Dropdown } from 'semantic-ui-react'


export default class CourseCode extends React.Component {

    constructor() {
        super()
        this.state = {
            courseCodes:[],
            value:""

        }
    }

    componentDidMount() {
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
    componentWillReceiveProps(props) {
        console.log("here")
      }

      render() {
        const {courseCodes}=this.state
        return (
            <div className="column">
            <h4> Course Number:</h4>
            <Dropdown
                placeholder='Select Course Number'
                fluid
                search
                selection
                options={courseCodes}
                
                onChange={(e, data) => this.setState({ courseCodeInfo: data.value })}
            />
        </div>
        );
    }
}



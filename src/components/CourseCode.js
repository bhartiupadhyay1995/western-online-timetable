import React from "react";

export default class CourseCode extends React.Component {

    constructor() {
        super()
        this.state = {
            courseCodes:[],
            value:""

        }
    }

    componentDidMount() {
        console.log(this.state.value)
        //  fetch('http://localhost:8080/getCourseCode/'+subjectid)
        //   .then(res => res.json())
        //   .then(json => {
        //     this.setState({
        //         courseCodes: json,
        //     })
        //   }).catch((err) => {
        //     console.log(err);
        // });
    }

    componentWillReceiveProps(props) {
        console.log("here")
        this.setState({ value: props.dataFromParent })
        console.log(this.state.value)
      }

      render() {

        return (
            <div>
                The data from parent is:{this.props.dataFromParent}
            </div>
        );
    }
}



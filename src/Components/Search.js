import React from "react";

export default class Story extends React.Component {

    constructor() {
        super()
        this.state = {
      
        }
    }
    //To Get all stories from the api
    componentDidMount() {
        fetch('http://localhost:1234/api/getStoriesId')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true,
                })
            }).catch((err) => {
                console.log(err);
            });

    }

   //convert story post time from epoch to date
    epochToTime(epochdate) {
        var myDate = new Date(epochdate * 1000);
        const time = myDate.toGMTString();
        return time;
    }


    render() {
        return (
            <div className="App">
                 <form onSubmit={this.handleSubmit}></form>
                
               </div>
        );
    }
}

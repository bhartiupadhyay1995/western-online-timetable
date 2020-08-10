import React from 'react';
import Header from "./Header";
import InfoHead from './InfoHead';
import TableInfo from './Table';
import CourseInfo from './CourseInfo';
import PaginationComponent from './Pagination';
import Search from "./Search";
import getSchedule from '../service';

class App extends React.Component{
    state = { sujectResp: '' , paginationInfo: ''};

     getSchedule = async (subjQuery) =>{
        const resp = await getSchedule(subjQuery);
        this.setState({ sujectResp: resp.data.data.result })
        this.setState({ paginationInfo: resp.data.data.meta })
    }

    render(){
        return(
            <div className="App">
                <Header/>
                <InfoHead/>
                <Search onSubmit = {this.getSchedule}/>
                <CourseInfo/>
                <TableInfo subjects={this.state.sujectResp}/>
                <PaginationComponent pageInfo={this.state.paginationInfo}/>
            </div>
        );
    }
};

export default App;
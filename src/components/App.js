import React from 'react';
import Header from "./Header";
import InfoHead from './InfoHead';
import TableInfo from './Table';
import CourseInfo from './CourseInfo';
import PaginationComponent from './pagination';
import Search from "./Search";
import getSchedule from '../service';

class App extends React.Component{
    query = {};

    state = { sujectResp: '' , paginationInfo: ''};

     getSchedule = async (subjQuery, page) => {
        this.query =  subjQuery;
        const resp = await getSchedule(subjQuery, page);
        this.setState({ sujectResp: resp.data.data.result,  paginationInfo: resp.data.data.meta})
    }

    handlePagination = (page)=>{
        this.getSchedule(this.query, page);
    }

    render(){
        return(
            <div className="App">
                <Header/>
                <InfoHead/>
                <Search onSubmit = {this.getSchedule}/>
                <CourseInfo/>
                <TableInfo subjects={this.state.sujectResp}/>
                <PaginationComponent pageInfo={this.state.paginationInfo} onChange={this.handlePagination}/>
            </div>
        );
    }
};

export default App;
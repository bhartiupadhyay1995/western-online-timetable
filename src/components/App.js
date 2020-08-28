import React from 'react';
import Header from "./Header";
import InfoHead from './InfoHead';
import TableInfo from './Table';
import CourseInfo from './CourseInfo';
import PaginationComponent from './pagination';
import Search from "./Search";
import getSchedule from '../service';
import ShimmerLoader from './Loader';
import List from './List';



class App extends React.Component{
    query = {};

    state = { sujectResp: '' , paginationInfo: '', loading: false};

     getSchedule = async (subjQuery, page) => {
        this.query =  subjQuery;
        this.setState({loading: true})
        const resp = await getSchedule(subjQuery, page);
        this.setState({ sujectResp: resp.data.data.result,  paginationInfo: resp.data.data.meta, loading: false})
    }

    handlePagination = (page)=>{
        this.getSchedule(this.query, page);
    }

    render(){
        return(
            <div className="App">
                <Header/>
                <List/>
                <Search onSubmit = {this.getSchedule}/>
                <InfoHead/>
                <ShimmerLoader loading={this.state.loading}/>
                <TableInfo subjects={this.state.sujectResp}><CourseInfo/></TableInfo>
                <PaginationComponent pageInfo={this.state.paginationInfo} onChange={this.handlePagination}/>
            </div>
        );
    }
};

export default App;
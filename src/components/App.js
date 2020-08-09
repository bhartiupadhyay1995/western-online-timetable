import React from 'react';
import Header from "./Header";
import InfoHead from './InfoHead';
import TableInfo from './Table';
import CourseInfo from './CourseInfo';
import PaginationComponent from './pagination';
import Search from "./Search";

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Header/>
                <InfoHead/>
                <Search/>
                <CourseInfo/>
                <TableInfo/>
                <PaginationComponent/>
            </div>
        );
    }
};

export default App;
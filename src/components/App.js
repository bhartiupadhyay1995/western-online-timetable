import React from 'react';
import InfoHead from './InfoHead';
import TableInfo from './Table';
import CourseInfo from './CourseInfo';
import PaginationComponent from './pagination';

class App extends React.Component{
    render(){
        return(
            <div>
                <CourseInfo/>
                <TableInfo/>
                <PaginationComponent/>
            </div>
        );
    }
};

export default App;
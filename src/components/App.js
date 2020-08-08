import React from 'react';
import InfoHead from './InfoHead';
import TableInfo from './Table';
import CourseInfo from './CourseInfo';

class App extends React.Component{
    render(){
        return(
            <div>
                 <CourseInfo/>
                <TableInfo/>
            </div>
        );
    }
};

export default App;
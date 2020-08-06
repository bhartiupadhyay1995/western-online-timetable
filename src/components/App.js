import React from 'react';
import Header from "./Header";
import InfoHead from './InfoHead';
import Search from "./Search";

class App extends React.Component{
    render(){
        return(
            <div className="App">
            <Header/>
            <InfoHead/>
            <Search/>
            </div>
        );
    }
};

export default App;
import React from 'react';
import Header from "./Components/Header";
import InfoHead from './InfoHead';
import Search from "./Components/Search";

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
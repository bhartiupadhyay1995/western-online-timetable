import React from 'react';
//import './App.css';
import Header from "./Components/Header";
import Search from "./Components/Search";

class App extends React.Component {
  state = {
    visible: true
  };

   
    render() {
      return (
        <div className="App">
          <Header/>
          <Search/>
        </div>
      );
    }
  }

export default App;

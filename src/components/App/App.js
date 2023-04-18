import React, { Component } from 'react'; 
import Header from '../header';
import Social from '../social';
import './app-styles.css'
class App extends Component {
  render() {
    return (
      <div id='app'> 
        <Header/>
        <Social/>
        
      </div>
    );
  }
}

export default App;

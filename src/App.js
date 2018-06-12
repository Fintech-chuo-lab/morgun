import React, { Component } from 'react';
import './App.css';
import Base from './components/Base';

class App extends Component {
  constructor() {
     super()
     this.state = {
       open: false
     }
   }
   handleToggle() {
     this.setState({
       open: !this.state.open
     })
   }
   render() {
     return (
       <div>
         <Base/>
       </div>
     );
   }
}

export default App;

import React, { Component} from 'react';
import Grid from './Grid';

import './App.css';


class App extends Component {
  
  constructor(props) {
    super(props);

    this.state={};
  }
  render(){
    return (
      <div className='app'>
         <Grid />
      </div>
    )
  }
}

export default App;
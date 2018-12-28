import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { buyItem, getOwner, action } from './send.js';

class App extends Component {
  async componentWillMount () {
    // this.owner()
    // this.bid()
    this.action()
  }

  bid () {
    buyItem(2, 1000000000000000000).then(resp => {
      console.log(resp, 'success');
    }).catch(e => {
      console.log(e, 'error');
    })
  }

  async owner () {
    const owner = await getOwner();
    console.log(owner, 'owner');
  }

  action () {
    action(2, 500000000000000000, 2000000000000000000, 432000).then(resp => {
      console.log(resp, 'success')
    }).catch(e => {
      console.log(e, 'error');
    })
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;

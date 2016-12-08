import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div style={{textAlign: 'left', margin: '0 4rem'}} className="home">
        <h1 style={{textAlign: 'center'}}>Home</h1>
        <p>This is a project for The Iron Yard Minneapolis Front End Engineering course. <br/> The Assignment was to use the bestbuy api playground and react-router to make a website which will load a list of stores that you can click on to load one specific store and a google map showing its location.</p>
      </div>
    );
  }
}

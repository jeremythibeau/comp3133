import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/student';
import College from './components/college';

class App extends Component {
  render() {
    return (
      <>
      <Student name="Rick Rude" number="1111" enrolled="1"/>
      <Student name="Shawn Michaels" number="2222" enrolled="2"/>
      <Student name="Bret Hart" number="3333"enrolled="3"/>
      <College name="george brown" location="casa loma"/>
      </>
  );
}
}

export default App;
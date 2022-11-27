import './App.css';

import React, { Component } from 'react'
import Navbar from './compenents/Navbar';
import News from './compenents/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 6;
  apiKey=process.env.REACT_APP_API_KEY;

  state={
    progress : 0
  }

  setProgress = (progress) =>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
      
      <Router>
      <Navbar/>
      <LoadingBar color='#f11946' height={2} progress={this.state.progress}/>
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey}  stProgress={this.setProgress}  key="general" pageSize = {this.pageSize} country="us" category="general"/>} />
            <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="business" pageSize = {this.pageSize} country="us" category="business"/>} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="entertainment" pageSize = {this.pageSize} country="us" category="entertainment"/>} />
            <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="general" pageSize = {this.pageSize} country="us" category="general"/>} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="health" pageSize = {this.pageSize} country="us" category="health"/>} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="science" pageSize = {this.pageSize} country="us" category="science"/>} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="sports" pageSize = {this.pageSize} country="us" category="sports"/>} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="technology" pageSize = {this.pageSize} country="us" category="technology"/>} />
          </Routes>
      </Router>
        
      </>
    )
  }
}

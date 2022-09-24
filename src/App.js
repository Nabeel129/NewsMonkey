import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import NewsComponent from './Components/NewsComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API;
  // apiKey = "f50a02b24e17480298a1fabfd5c443a4";
  pageSize = 18;

  state = {
    progress: 10
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="" pageSize={this.pageSize} country={'in'} category={'general'} />}></Route>
            <Route exact path="/general" element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country={'in'} category={'general'} />}></Route>
            <Route exact path="/business" element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country={'in'} category={'business'} />}></Route>
            <Route exact path="/entertainment" element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country={'in'} category={'entertainment'} />}></Route>
            <Route exact path="/sports" element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country={'in'} category={'sports'} />}></Route>
            <Route exact path="/health" element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country={'in'} category={'health'} />}></Route>
            <Route exact path="/science" element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country={'in'} category={'science'} />}></Route>
            <Route exact path="/technology" element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country={'in'} category={'technology'} />}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}


// #My_Api
// #REACT_APP_NEWS_API = "f50a02b24e17480298a1fabfd5c443a4";
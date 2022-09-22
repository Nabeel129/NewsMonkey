import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import NewsComponent from './Components/NewsComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/general" element={<NewsComponent key="general" pageSize={21} country={'au'} category={'general'} />}></Route>
            <Route exact path="/business" element={<NewsComponent key="business" pageSize={21} country={'au'} category={'business'} />}></Route>
            <Route exact path="/entertainment" element={<NewsComponent key="entertainment" pageSize={21} country={'au'} category={'entertainment'} />}></Route>
            <Route exact path="/sports" element={<NewsComponent key="sports" pageSize={21} country={'au'} category={'sports'} />}></Route>
            <Route exact path="/health" element={<NewsComponent key="health" pageSize={21} country={'au'} category={'health'} />}></Route>
            <Route exact path="/science" element={<NewsComponent key="science" pageSize={21} country={'au'} category={'science'} />}></Route>
            <Route exact path="/technology" element={<NewsComponent key="technology" pageSize={21} country={'au'} category={'technology'} />}></Route>

          </Routes>
        </Router>
      </>
    )
  }
}

import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import NewsComponent from './Components/NewsComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'


const App = (props) => {

  const apiKey = process.env.REACT_APP_NEWS_API;

  let pageSize = 18;

  const [progress, setProgress] = useState(10);

  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={4}
        />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="" pageSize={pageSize} country={'in'} category={'general'} />}></Route>
          <Route exact path="/general" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={'in'} category={'general'} />}></Route>
          <Route exact path="/business" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={'in'} category={'business'} />}></Route>
          <Route exact path="/entertainment" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={'in'} category={'entertainment'} />}></Route>
          <Route exact path="/sports" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={'in'} category={'sports'} />}></Route>
          <Route exact path="/health" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={'in'} category={'health'} />}></Route>
          <Route exact path="/science" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={'in'} category={'science'} />}></Route>
          <Route exact path="/technology" element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={'in'} category={'technology'} />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
// #My_Api
// #REACT_APP_NEWS_API = "f50a02b24e17480298a1fabfd5c443a4";
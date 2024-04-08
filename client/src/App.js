import React from 'react';
import TextEditor from "./components/TextEditor";
import {BrowserRouter as Router, Route,Routes,Navigate} from 'react-router-dom'
import { v4 as uuidV4 } from "uuid"
function App() {
 
  return (
    <Router>
      <Routes>
        <Route path='/' element={<a href={`/document/${uuidV4()}`}>create document</a>}/>
        <Route path='/document/:id' element={<TextEditor/>} />
      </Routes>
    </Router>
  )
}

export default App;


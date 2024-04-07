import TextEditor from "./components/TextEditor";
import {
  BrowserRouter as Router, 
Switch, 
Route,
Redirect,
} from 'react-router-dom'
import {v4 as uuidV4} from 'uuid'
function App() {
  return (
    
     <>
     
     <TextEditor/>
     </>
  );
}

export default App;

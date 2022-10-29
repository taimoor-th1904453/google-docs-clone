import logo from './logo.svg';
import './App.css';
import Docs from './components/docs'
import { app, database } from './firebaseConfig';
import { Routes, Route } from "react-router-dom";
import EditDocs from './components/editDocs';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Docs database={database} />} />
      <Route path = '/editDocs/:id' element = {<EditDocs database = {database}></EditDocs>}/>
    </Routes>

  );
}

export default App;

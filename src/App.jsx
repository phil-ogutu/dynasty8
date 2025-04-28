import "./App.css";
import Admin from "./pages/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddProperty from "./pages/AddProperty";

function App() {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/properties")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data)
      })
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home properties={properties}/>} />

          <Route path="/admin" element={<Admin properties={properties} setProperties={setProperties}/>}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-property" element={<AddProperty />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

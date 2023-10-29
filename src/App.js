import "./App.css";
import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import Alert from './components/Alert'
import Form from "./components/Form";
import About from "./components/About";
import NotFound from "./components/NotFound";
import {
   BrowserRouter,
   Route,
   Routes,
} from "react-router-dom";

function App() {

   const [colorMode, setColorMode] = useState('light');
   const [alert, setAlert] = useState(null);
   const [pagePath, setpagePath] = useState('');

   let toggleColorMode = () => {
      document.body.classList.toggle('text-light');
      document.body.classList.toggle('bg-dark');
      if (colorMode === 'dark') {
         setColorMode("light");
      } else {
         setColorMode("dark");
      }
   }

   let showAlert = (message, type) => {
      setAlert({ message, type });
      setTimeout(() => {
         setAlert(null);
      }, 2000);
   }

   let textForm = <Form heading="Enter Text To Analyze" showAlert={showAlert} setpagePath={setpagePath} />
   let about = <About setpagePath={setpagePath} />
   let notFound = <NotFound />

   return (
      <>
         <BrowserRouter>
            <Navbar colorMode={colorMode} toggleColorMode={toggleColorMode} title="TextUtils" pagePath={pagePath}/>
            <div className="container pt-3">
               <Alert alert={alert} />
               <Routes>
                  <Route path='*' element={notFound} />
                  <Route path="/" element={textForm} />
                  <Route path="/about" element={about} />
               </Routes>
            </div>
         </BrowserRouter>
      </>
   );
}

export default App;

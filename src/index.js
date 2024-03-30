import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MaterialPage from "./components/palettePages/materialPage";
import FlatPage from "./components/palettePages/flatPage"
import DutchPage from "./components/palettePages/dutchPage"
import AmericanPage from "./components/palettePages/americanPage"
import AusiePage from "./components/palettePages/ausiePage"
import BritishPage from "./components/palettePages/britishPage"
import SpanishPage from "./components/palettePages/spanishPage"
import IndianPage from "./components/palettePages/indianPage"
import FrenchPage from "./components/palettePages/frenchPage"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/materialUIcolor" element={<MaterialPage />} />
        <Route path="/flatUIcolor" element={<FlatPage/>}/>
        <Route path="/dutchUIcolor" element={<DutchPage/>}/>
        <Route path="/americanUIcolor" element={<AmericanPage/>}/>
        <Route path="/ausieUIcolor" element={<AusiePage/>}/>
        <Route path="/britishUIcolor" element={<BritishPage/>}/>
        <Route path="/spanishUIcolor" element={<SpanishPage/>}/>
        <Route path="/indianUIcolor" element={<IndianPage/>}/>
        <Route path="/frenchUIcolor" element={<FrenchPage/>}/>

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

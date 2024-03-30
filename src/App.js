import { NavLink } from "react-router-dom";
import './App.css';
import FlatUIColors from "./components/paletteIcons/flatUIColors"
import MaterialUIColor from "./components/paletteIcons/materialUIColor"
import AussieUIColor from "./components/paletteIcons/aussieUIColor"
import DutchUIColor from "./components/paletteIcons/dutchUIColor"
import AmericanUIColor from "./components/paletteIcons/americanUIColor"
import BritishUIColor from "./components/paletteIcons/britishUIColor"
import SpanishUIColor from "./components/paletteIcons/spanishUIColor"
import IndianUIColor from "./components/paletteIcons/indianUIColor"
import FrenchUIColor from "./components/paletteIcons/frenchUIColor"


function App() {
  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#3c40c6', 
      backgroundImage: "url(https://flatuicolors.com/static/img/stars-opacity.0979c1.svg)"
    }}>
    
      <div style={{
        fontSize: "36px",
        color: "#fff",
        left: "2px",
        bottom: "5px",
        letterSpacing: "2.5px",
        fontWeight: "900",
        marginBottom: "20px",
        textAlign: "left",  
        width: "63%"       
      }}>
        Flat UI Colors 2
      </div>
    
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gridTemplateRows: 'repeat(3, 1fr)', 
        gap: "20px",
        justifyContent: 'center',  
        alignItems: 'center',        
      }}>
        <NavLink to="/materialUIcolor"><MaterialUIColor/></NavLink>
        <NavLink to="/flatUIcolor"><FlatUIColors/></NavLink>
        <NavLink to="/dutchUIcolor"><DutchUIColor/></NavLink>
        <NavLink to="/americanUIcolor"><AmericanUIColor/></NavLink>
        <NavLink to="/ausieUIcolor"><AussieUIColor/></NavLink>
        <NavLink to="/britishUIcolor"><BritishUIColor/></NavLink>
        <NavLink to="/spanishUIcolor"><SpanishUIColor/></NavLink>
        <NavLink to="/indianUIcolor"><IndianUIColor/></NavLink>     
        <NavLink to="/frenchUIcolor"><FrenchUIColor/></NavLink>   
        
      </div>
      
    </div>
  );
  
  
}

export default App;


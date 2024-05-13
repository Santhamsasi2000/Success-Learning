import Details from "./components/Details";
import Login from "./components/Login";
import Programs from "./components/Programs";
import Quotes from "./components/Quotes";
import './css/login.css';
import './css/quotes.css';
import './css/programs.css';
import "./css/details.css";


function App() {
  return (
    <div>
         <Login/>
         <Quotes/> 
         <Programs/>
         <Details/> 
    </div>
  );
}

export default App;

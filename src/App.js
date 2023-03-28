import './App.css';
import Navig from './components/Navig';
import Car from './components/Car';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <div> <Navig/></div>
   <div><Car/></div>
   <Footer/>
    </div>
  );
}

export default App;
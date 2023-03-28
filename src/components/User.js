import Car from './Car';
import 'bootstrap/dist/css/bootstrap.min.css';
import Naviguser from './Naviguser';
import Footer from './Footer';
function User() {
  return (
    <div className="App">
      <div> <Naviguser/></div>
        <div><Car/></div>
        <Footer/>
    </div>
  );
}

export default User;
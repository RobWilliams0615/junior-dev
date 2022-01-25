import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import JobListings from './components/JobListings';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
        <JobListings />
        <Footer />
      </div>
    </div>
  );
}

export default App;

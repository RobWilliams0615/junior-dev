import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBAr';
import JobListings from './components/JobListings';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
        <JobListings />
      </div>
    </div>
  );
}

export default App;

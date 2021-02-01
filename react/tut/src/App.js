import './App.css';
import Navbar from './Navbar'
import Home from './Home'

function App() {
  const title = "Hi"
  return (
    <div className="App">
      <Navbar />
      <Home />
      <h2> {title} </h2>
    </div>
  );
}

export default App;

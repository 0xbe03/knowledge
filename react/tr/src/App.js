import './App.css';
import Header from './components/Header' 

function App() {
  const name = 'reza'
  return (
    <div className="container">
      <Header name='reza'/>
      <h1>Hello from react</h1>
      <h2>Hello { name }</h2>
    </div>
  );
}

export default App;

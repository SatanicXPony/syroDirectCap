import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Slidetrack from "./components/Slidetrack.js"

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Slidetrack />
      </main>
    </div>
  );
}

export default App;

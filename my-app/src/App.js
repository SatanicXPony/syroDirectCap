import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Slidetrack from "./components/Slidetrack.js"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Slidetrack />
        <Slidetrack />
      </main>
    </div>
  );
}

export default App;

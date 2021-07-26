import './App.css';
import landingTransition from './components/landingTransition';
import Header from './components/Header.js';
import Slidetrack from "./components/Slidetrack.js"
import 'bootstrap/dist/css/bootstrap.min.css';
{/*need to set up react-router */}

function App() {
  return (
    <div className="App">
      <main>
        <landingTransition/>
        <Header />
        <Slidetrack />
        <Slidetrack />
      </main>
    </div>
  );
}

export default App;

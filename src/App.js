import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Greet1, { Greet1x } from './components/Greet2';
import Header from './components/Header';
import PageBody from './components/PageBody';

function App() {
  return (
    <div className="App">
     
     <Header />
     <PageBody/>
    
    </div>
  );
}

export default App;

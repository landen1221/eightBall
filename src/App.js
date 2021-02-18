import logo from './logo.svg';
import './App.css';
import EightBall from './EightBall';
import Answers from './Answers';

function App() {
  return (
    <div className="App">
      <h1>Magic 8-Ball</h1>
      <EightBall answers={Answers} />
        
    </div>
  );
}

export default App;

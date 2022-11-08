import gatorLogo from './gator.gif';  // Keep the correct logo import
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gatorLogo} className="App-logo" alt="logo" />  {/* Ensure logo matches the variable name */}
        <p> Hello World! </p>
        <p> My name is Nikolas Praschma and this is our team project. </p>  {/* Combined text changes */}
      </header>
    </div>
  );
}

export default App;

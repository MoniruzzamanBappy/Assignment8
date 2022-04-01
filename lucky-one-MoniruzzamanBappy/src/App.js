import './App.css';
import Answer from './component/Answer/Answer';
import Cars from './component/Cars/Cars';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Cars></Cars>
      <Answer></Answer>
    </div>
  );
}

export default App;

import HomeScreen from './components/home-screen';
import GameScreen from './components/game-screen';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Wordle Game
      </h1>
      <div style={{"display":'none'}}>
        <HomeScreen/>
      </div>
      
      <div style={{"display":'block'}}>
        <GameScreen/>
      </div>
    </div>
  );
}

export default App;

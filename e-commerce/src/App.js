import './App.css';
import NavigationPage from './Customer/Components/Navigation';
import HomePage from './Customer/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
    <NavigationPage/>
    <div>
      <HomePage/>
    </div>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import GreetingPage from './components/GreetingPage';

function App() {
  return (
    <div className="App">
      <h1>Greeting page</h1>
      <Routes>
        <Route
          path="/"
          element={<GreetingPage />}
        />
      </Routes>
    </div>
  );
}

export default App;

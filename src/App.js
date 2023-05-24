import './App.css';
import Main from './pages/Main/Main'
import Provider from './hooks/Provider';

function App() {

  return (
    <Provider>
      <Main />
    </Provider>

  );
}

export default App;
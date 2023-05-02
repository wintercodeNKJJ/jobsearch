import './App.css';
import { Layout } from './components';
import { StateContext } from './context/context';

function App() {
  return (
    <div className="App Roboto-medium text-neutral">
      <StateContext>
        <Layout/>
      </StateContext>
    </div>
  );
}

export default App;

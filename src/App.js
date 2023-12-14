
import './App.css';
import Forminput from './Form';
import Login from './components/login';
import Register from './components/register';
import Form from './useeffect';
import Crud from './components/crud';

function App() {
  return (
    <div className="App">
      <Crud/>
      {/* <Login/>
      <Register/> */}
    </div>
  );
}

export default App;

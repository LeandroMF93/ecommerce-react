import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
        <Routes>
          <Route path='/'/>
          <Route path='/category/:categoryId' />
          <Route path='/detail/:productId' /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

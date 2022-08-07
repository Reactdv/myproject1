import logo from './logo.svg';
import './App.css';
import { Routes,Route, HashRouter} from 'react-router-dom'
import { Home,NotFound } from './pages'
 



function App() {
  return (
  <HashRouter>
     <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/> 
     </Routes>
  </HashRouter>
  );
}


export default App;

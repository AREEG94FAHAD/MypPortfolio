import './App.css';
import MySkills from './components/MySkills/MySkills';
import MyWorks from './components/MyWorks/MyWorks';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <MySkills/>
    <MyWorks/>
    </div>
  );
}

export default App;

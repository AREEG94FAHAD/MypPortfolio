import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Certificate from './components/Certificate/Certificate';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import MySkills from './components/MySkills/MySkills';
import MyWorks from './components/MyWorks/MyWorks';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <MySkills/>
    <MyWorks/>
    <AboutMe/>
    <Education/>
    <Experience/>
    <Certificate/>
    <Experience/>
    </div>
  );
}

export default App;

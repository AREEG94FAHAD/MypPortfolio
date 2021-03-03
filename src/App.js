import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Certificate from './components/Certificate/Certificate';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import MySkills from './components/MySkills/MySkills';
import My2 from './components/MyWorks/My2';
import MyWorks from './components/MyWorks/MyWorks';
import NavBar from './components/NavBar/NavBar';
import Email from './components/Email/Email'

function App() {


  return (
    <div className="App">
     <NavBar/>
     <MySkills/>
    {/* <MyWorks/> */}
    <My2/>
    <AboutMe/>
    <Education/>
    <Experience/>
    <Certificate/>
    <ContactInfo/>
   
    </div>
  );
}

export default App;

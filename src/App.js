import {Loader} from './components/Loader'
import {NavBar} from './components/NavBar'
import {Banner} from './components/Banner'
import {Skills} from './components/Skills'
import {Projects} from './components/Projects'
import {Contact} from './components/Contact'
import {Footer} from './components/Footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Loader/>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
} 

export default App;

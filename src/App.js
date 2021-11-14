import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import {useGlobalContext} from "./context";
function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Sidebar />
    </div>
  );
}

export default App;

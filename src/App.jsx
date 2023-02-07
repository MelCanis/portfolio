import './App.sass';
import Menu from './components/menu';
import Hero from './components/hero';
import Work from './components/work';
import Contact from './components/contact';
import { session } from './session';
import Cursor from './components/cursor';
import Bar from './components/bar';
import { Noise } from './components/noise';

function App() {
  const {active} = session(s=>s);
  return (
    <div className="App">
      <div className="screen">
        <Menu />
        {active == 'hero' && <Hero />}
        {active == 'work' && <Work />}
        {active == 'contact' && <Contact />}
        <Bar />
      </div>
      <Cursor />
      <Noise />
    </div>
  );
}

export default App;

import './App.css';
import Nav from './components/Nav';
import { ColorModeScript } from '@chakra-ui/react'

function App() {
  return (
      <div className="App">
        <ColorModeScript initialColorMode={"dark"} />
        <Nav/>
      </div>
  );
}

export default App;

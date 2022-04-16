import Header from './components/Header';
import './css/base.css';
import './css/media.css';
import ScrollTop from './components/ScrollTop';
import Home from './components/Home';
import Share from './components/Share';
import Decorations from './components/Decorations';
function App() {
  return (
    <div>
      <ScrollTop/>
      <Header></Header>
      <Home></Home>
      <Share></Share>
      <Decorations></Decorations>
    </div>
  );
}

export default App;

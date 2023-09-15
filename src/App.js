import './App.css';
import Banner from './Component.js/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Types from './Component.js/Types';
import Symmetric from './Component.js/Symmetric';
import Asymmetric from './Component.js/Asymmetric';
import HashFunctions from './Component.js/HashFunctions';
import HybridEncryption from './Component.js/HybridEncryption';
import QuantumEncryption from './Component.js/QuantumEncryption';
import HomomorphicEncryption from './Component.js/HomomorphicEncryption';
import PostQuantumEncryption from './Component.js/PostQuantumEncryption';
import EndtoEndEncryption from './Component.js/EndtoEndEncryption';
import FileandDiskEncryption from './Component.js/FileandDiskEncryption';
import Footer from './Component.js/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <Types />
      <Symmetric />
      <Asymmetric />
      <HashFunctions />
      <HybridEncryption />
      <QuantumEncryption />
      <HomomorphicEncryption />
      <PostQuantumEncryption />
      <EndtoEndEncryption />
      <FileandDiskEncryption />
      <Footer />
    </div>
  );
}

export default App;

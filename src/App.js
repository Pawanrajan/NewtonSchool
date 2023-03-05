import Header from './component1/Header';
import Sidebar from './component1/Sidebar';
import Main from './component1/Main';
import Footer from './component1/Footer';
import './App.css';

function App() {
  return (
    <div className="main-flex-container">
      <Header />
      <div className="container">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
export default App;

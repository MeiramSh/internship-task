import './App.css';
import Posts from './components/Posts';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (

    <div>
      <header>
        <div className='logo-container'>
          <h1 className='website-logo'>Magzhan.kz</h1>
        </div>
        <NavBar />
      </header>
      <div className="app">
        <main className="main-content">
          <Posts />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

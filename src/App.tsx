import './App.css';
import Posts from './components/Posts';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (

    <div>
      <header>
        <h1>Magzhan.kz</h1>
      </header>
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Posts />
        </main>
        <Footer />
      </div>
    </div>

  );
}

export default App;

import './App.css';
import Banner from './components/banner';
import Header from './components/header';
import Cards from './components/cards';
import Category from './components/category';


function App() {
  return (
    <main className="App">
      {/* <header className="App-header">
        TheCoder is Coming soon............
      </header> */}
      <Header />
      <Banner />
      <Cards />
      <Category />
    </main>
  );
}

export default App;

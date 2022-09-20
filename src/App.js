// import logo from './logo.svg';
import './index.css';
import Heading from './components/Heading'
import MovieGrid from './components/MovieGrid';
// import Buttons from './components/Buttons';
import Footer from './components/Footer';
import PageNumbers from './components/BootstrapExamples';


function App() {
  return (
    <div>
     <Heading />
     <h1> Latest Movies </h1>
     <MovieGrid />
     <h1> Movies For The Family</h1>
     <MovieGrid />
     <h1> Summer Collection </h1>
     <MovieGrid />
     <PageNumbers />
     <Footer />
    </div>
  );
}

export default App;

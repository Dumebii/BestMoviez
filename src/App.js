// import logo from './logo.svg';
import './index.css';
import Heading from './components/Heading'
import MovieGrid from './components/MovieGrid';
import Buttons from './components/Buttons';


function App() {
  return (
    <div>
     <Heading />
     <MovieGrid />
     <MovieGrid />
     <MovieGrid />
     <Buttons />
    </div>
  );
}

export default App;

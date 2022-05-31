
import './App.css';
import { Navbar } from './Component/Navbar';
import { Form } from './Component/Form';
import { Footer } from './Component/Footer';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const {isLight} = useContext(ThemeContext);
  return (
    <div className={`App ${isLight ? 'light' : 'dark'}`}>
     <Navbar />
     <Form />
     <Footer />
    </div>
  );
}

export default App;

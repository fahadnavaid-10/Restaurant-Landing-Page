
import './App.css';
import Home from "./components/Home";
import About from './components/About';
import Work from './components/Work';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from './components/Footer';
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
      <Work/>
      <About/>
      <Testimonial/>
      <Contact/>
      <Footer/>

    </ThemeProvider>
  );
}


export default App;

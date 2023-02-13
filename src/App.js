import Landing from './pages/Landing';
import Services from './pages/Services';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs'
import Footer from './components/Footer';
import ScrollerTop from './components/ScrollerTop';
import DarkModeButton from './components/DarkModeButton';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <>
    <ThemeProvider>
      <Landing/>
      <DarkModeButton/>
      <Services/>
      <Menu/>
      <ScrollerTop/>
      <AboutUs/>
      <Footer/> 
    </ThemeProvider>
    </>
  );
}

export default App;

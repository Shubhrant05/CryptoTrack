
import './App.css';
import ButtonRow from './components/ButtonRow';
import CardRow from './components/CardRow';
import SimpleButton from './components/SimpleButton';
import Table from './components/Table';
import Topbar from './components/topbar';
import TopCarousel from './components/TopCarousel';
import TopCarouselMobile from './components/TopCarouselMobile';
import './Style.css'
function App() {
  const mediaMatch = window.matchMedia('(max-width: 600px)');
  return (
    <div className="App">
      <div>
        <Topbar />
      </div>
      <div style={{
        marginLeft: "10%",
        marginRight: "10%",
      }}>
        {!mediaMatch.matches ? <TopCarousel /> : <TopCarouselMobile/> }
        <div style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          textAlign: "left",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}>
          Top 100 Cryptocurrencies by Market Cap
          
        </div>
        {!mediaMatch.matches && <ButtonRow/>}
      </div>
      <div className='tabledisplay'><Table /></div> 
    </div>
  );
}

export default App;

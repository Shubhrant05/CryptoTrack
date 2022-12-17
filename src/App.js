
import './App.css';
import CardRow from './components/CardRow';
import Table from './components/Table';
import Topbar from './components/topbar';

function App() {
  return (
    <div className="App">
      <div>
        <Topbar />
      </div>
      <div style={{
        marginLeft: "10%",
        marginRight: "10%",
      }}>
        <div>
          <CardRow />
        </div>
        <div style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          textAlign: "left",
          marginTop : "1rem",
          marginBottom : "1rem",
        }}>
          Top 100 Cryptocurrencies by Market Cap
        </div>
        <Table/>
      </div>
    </div>
  );
}

export default App;

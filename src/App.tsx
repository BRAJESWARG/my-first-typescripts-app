
import './App.css';
import ColorButton from './components/ColorButton';
import Table from './components/Table';



function App() {
  return (
    <div className="App">

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <ColorButton />
        <Table />
      </div>

    </div>
  );
}

export default App;

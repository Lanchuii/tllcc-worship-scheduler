import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';

interface SheetData {
  Date: string;
  Leader: string;
  Backup1: string;
  Backup2: string;
  Acoustic: string;
  Keyboard: string;
  Electric: string;
  Drums: string;
  Bass: string;
}

function App() {
  const [data, setData] = useState<SheetData[]>([]);

  const readSheetData = () => {
    fetch('https://sheetdb.io/api/v1/uos3vqvsmdnyv')
      .then((response) => response.json())
      .then((apiData) => {
        if (Array.isArray(apiData)) {
          setData(apiData);
          console.log(apiData);
        }
      });
  };

  return (
    <div>
      <NavBar />
      <div className='main'>
        {data.map((band, index) => (
          <div key={index} className='sched-box'>
            <p>Leader: {band.Leader}</p>
            <p>Backup 1: {band.Backup1}</p>
            <p>Backup 2: {band.Backup2}</p>
            <p>Acoustic: {band.Acoustic}</p>
            <p>Keyboard: {band.Keyboard}</p>
            <p>Electric: {band.Electric}</p>
            <p>Drums: {band.Drums}</p>
            <p>Bass: {band.Bass}</p>
            {/* Display other data properties here */}
          </div>
        ))}
      </div>
      <button onClick={readSheetData}>Display Data</button>
    </div>
  );
}

export default App;

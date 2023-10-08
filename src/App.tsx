import { useEffect, useState, ChangeEvent } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import SchedItem from './Components/SchedItem';
import AddSchedItem from './Components/AddSchedItem';
import SheetData from './Shared/SheetData';
import initialSheet from './Shared/InitialSheet';

function App() {
  const [data, setData] = useState<SheetData[]>([]);
  const [formData, setFormData] = useState(initialSheet);
  const [trigger, setTrigger] = useState<boolean>(false);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = () => {
    fetch('https://sheetdb.io/api/v1/9cujhhn4y2ezh')
      .then((response) => response.json())
      .then((apiData) => {
        if (Array.isArray(apiData)) {
          setData(apiData);
        }
      });
  };

  const createSched = () => {
    fetch('https://sheetdb.io/api/v1/9cujhhn4y2ezh', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: [formData] })
    })
    .then(() => {
      fetchData();
  })
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <NavBar />
      <SchedItem data={data} />
      <button onClick={() => setTrigger(!trigger)}>Add Shcedule</button>
      <AddSchedItem 
        formData={formData}
        handleInputChange={handleInputChange}
        createSched={createSched}
        trigger={trigger}
        setTrigger={setTrigger}
      />
    </div>
  );
}

export default App;

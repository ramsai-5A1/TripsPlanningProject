import { useState } from 'react';
import './App.css';
import data from './data';
import Tours from './components/Tours';

function App() {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0) {
    return (
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='button_white' onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="App">
        <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;

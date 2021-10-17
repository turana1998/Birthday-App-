import './App.css';
import { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople]=useState(data)
  return (
     <main className="main">
        <div className="container">
            <h3>{people.length} Birthdays for Today</h3>
            <List people={people}></List>
            <button onClick={()=>setPeople([])}>
              Clear all
            </button>
        </div>
     </main>
  );
}

export default App;

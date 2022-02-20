import './App.css';
import { useState } from 'react';

const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        {open === true &&
          <div className="modal">
            A kék szép szín.
          </div>
        }
        <button onClick={() => setOpen(!open)}>
          {open ? 'hide' : 'show'}
        </button>

      </header>
    </div>
  );
}

export default App;

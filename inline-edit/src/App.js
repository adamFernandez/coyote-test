import React from 'react';
import { useState } from 'react';
import './App.css';
import HelloTag from './components/HelloTag/HelloTag.component';

const App = () => {
  const [showInput, setShowInput] = useState(false)
  return (
    <div className="App" >
      <HelloTag text='Hello World' showInput={showInput} setShowInput={setShowInput}/>
      
    </div>
  );
}

export default App;

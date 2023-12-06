import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FileNo1 from './Component/FileNo1';
import FileNo2 from './Component/FileNo2';
import FileNo3 from './Component/FileNo3';

function App() {


  return (
    <div className="App">
      <FileNo2/>
     <FileNo1/>
     <FileNo3/>
    </div>
  )
}

export default App

import React from 'react';
import './App.css';
import Mainwidget from './Containers/Parent-widget' 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileAlt,faCamera} from '@fortawesome/free-solid-svg-icons';

library.add(faFileAlt,faCamera);

function App() {
  return (
    <div className="App">
     
     <Mainwidget></Mainwidget>
    </div>
  );
}

export default App;

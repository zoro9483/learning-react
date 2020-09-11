//import { render } from '@testing-library/react';

import React, { Component } from 'react';
import './App.css';
import person from './person/person';
import Person from './person/person';
import Footer from './person/footer';


//import Footer from './footer'


/*
function App() {
  return (

    <div className="App">
      <h1>Hi, i am a react app</h1>
      
    </div>
    
  );
}
*/
    class App extends Component {
       render(){
         return (

           //this is not html, this is jsx
          <div className="App">

          
          <h1>Hi, i am a react app</h1>
          <p> hell yeah</p>
          <Person/>
          <Footer/>
          

        </div>
         )
       }
    }
/*
const App = ()=>{
  return (
      <div className="App">
          <h1>Hello React</h1>
          <Footer/>
      </div>
  )
}
*/


export default App;

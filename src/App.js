import logo from './logo.svg';
import './App.css';
import React from 'react';
import Data from './data';

function App() {
  return (
    <div>
      <Data />
      <h1>you can take a pdf now</h1>
      <button>click me for pdf download</button>
    </div>
  );
}

export default App;



//import React from "react";
//import ReactDOMServer from "react-dom/server";
//import jsPDF from "jspdf";
//const doc = new jsPDF();
//const Foo = <b>foo</b>;

//export default function App() {
  //const save = () => {
    //doc.html(ReactDOMServer.renderToStaticMarkup(Foo), {
      //callback: () => {
        //doc.save("myDocument.pdf");
      //}
    //});
  //};

  //return (
  //  <div>
     // <button onClick={save}>save</button>
    //</div>
  //);
//}
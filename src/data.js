import React, { Component } from "react";

import jsPDF from 'jspdf'
import logo from './nature.png';

class Data extends Component {
pdfGenerate = () => {
    var doc = new jsPDF('landscape', 'px', 'a4', 'false');
    doc.addImage(logo, 'PNG', 65, 20, 400, 400)
    doc.addPage()
    doc.text(120,410,'hi my name is Mohit')
    doc.save('bpv.pdf')
}
render() {
    return (
        <div style={{textAlign:'center'}}><br/>
        <button onClick={this.pdfGenerate}>Download pdf</button>
        </div>
    )
}
}
export default Data;
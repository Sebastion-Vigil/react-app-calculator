import React from 'react';
import '../css/Keyboard.css';
import '../css/Calculator.css'; // pretty sure I don't need this

class Keyboard extends React.Component {
  
  render () {
    return (
      <div className="keyboard">
        <div className="row">
          <button className="button lt-grey" onClick={() => this.props.onClear()}>AC</button>
          <button className="button lt-grey" onClick={() => this.props.onPlusMinus()}>+/-</button>
          <button className="button lt-grey" onClick={() => this.props.onKeyPress(this.props.keys[18])}>%</button>
          <button className="button orng special" onClick={() => this.props.onKeyPress(this.props.keys[15])}><strong>&divide;</strong></button>
        </div>

        <div className="row">
          <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[6])}>{this.props.keys[6]}</button>
          <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[7])}>{this.props.keys[7]}</button>
          <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[8])}>{this.props.keys[8]}</button>
          <button className="button orng special" onClick={() => this.props.onKeyPress(this.props.keys[14])}><strong>x</strong></button>
        </div>

        <div className="row">
          <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[3])}>{this.props.keys[3]}</button>
          <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[4])}>{this.props.keys[4]}</button>
          <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[5])}>{this.props.keys[5]}</button>
          <button className="button orng special" id="minus-sign" onClick={() => this.props.onKeyPress(this.props.keys[13])}><strong>&#8722;</strong></button>
        </div>
 
        <div className="row">
          <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[0])}>{this.props.keys[0]}</button>
          <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[1])}>{this.props.keys[1]}</button>
          <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[2])}>{this.props.keys[2]}</button>
          <button className="button orng special" onClick={() => this.props.onKeyPress(this.props.keys[12])}><strong>{this.props.keys[12]}</strong></button>
        </div>

        <div className="row">
          <button className="button zero-btn" onClick={() => this.props.onKeyPress(this.props.keys[9])}>{this.props.keys[9]}</button>
          <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[17])}>{this.props.keys[17]}</button>
          <button className="button" id="equals" onClick={() => this.props.onEquals()}><strong>{this.props.keys[16]}</strong></button>
          <button className="button orng" onClick={() => this.props.onKeyPress(this.props.keys[19])}>X<sup>y</sup></button>
        </div>

        <div className="row">
          <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[10])}>{this.props.keys[10]}</button>
          <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[11])}>{this.props.keys[11]}</button>
          <button className="button orng" onClick={() => this.props.onSquareRoot()}>&#8730;</button>
          <button className="button" id="backspace" onClick={() => this.props.onBackSpace()}>&#9003;</button>
        </div>
      </div>
    )
  }
}

export default Keyboard;

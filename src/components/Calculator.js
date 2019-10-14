import React from 'react'
import Keyboard from './Keyboard'
import Display from './Display'

import '../css/Calculator.css'

class Calculator extends React.Component {
  state = {
    displayVal: '0',
    question: [],
    answer: null,
    keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', ' + ', ' - ', ' * ', ' / ', '=', '.', ' % ', ' ** ']
  }

  handleKeysClick = (val) => {
    const questionCopy = this.state.question;
    if (val === ' + ' || val === ' - ' || val === ' * ' || val === ' / ' || val === ' % ' || val === ' ** ') {
      if (this.state.displayVal === this.state.answer) {
        questionCopy.push(this.state.answer);
      }
    }
    if (questionCopy.length === 1 && questionCopy[0] ==='0' && !(isNaN(val))) {
      questionCopy.pop();
    }
    questionCopy.push(val);
    const display = questionCopy.join('').split(' ').join('');
    this.setState({
      displayVal: display,
      question: questionCopy
    });
    return;
  }

  handleClearButton = () => {
    this.setState({
      displayVal: '0',
      question: [],
      answer: null
    });
    return;
  }

  handlePlusMinusButton = () => {
    // found MAJOR bug in the way this is working
    // cannot toggle last numeric value of expression
    // weird behavior 
    const display = this.state.displayVal;
    if (display === '0') return;
    if (!(isNaN(display))) {
      const posOrNeg = (Number(display) > 0 ? -Math.abs(Number(display)) : Math.abs(Number(display))).toString();
      this.setState({
      displayVal: posOrNeg,
      question: [posOrNeg]
      });
    return;
    } else {
      let questionCopy = this.state.question;
      const lastItemReady = questionCopy.join('').split(' '); // these two lines
      const lastEnteredItem = lastItemReady[lastItemReady.length - 1]; // are also highly suspect
      let sliceLength = Number(lastEnteredItem) > 0 ? lastEnteredItem.length : 1;
      if (questionCopy.length > 1) {
        if (Number(lastEnteredItem) > 0 && isNaN(questionCopy[questionCopy.length - 2])) {
          sliceLength = 1;
        }
      }
      if (!(isNaN(lastEnteredItem))) {
        const pstvNgtv = (Number(lastEnteredItem) > 0 ? -Math.abs(Number(lastEnteredItem)) : Math.abs(Number(lastEnteredItem))).toString();
        
        questionCopy.splice(questionCopy.length - sliceLength); // so this is where the bug is happening, now how to fix?
        questionCopy.push(pstvNgtv);
        this.setState({
          displayVal: questionCopy.join('').split(' ').join(''),
          question: questionCopy
        });
        return;
      } else {
        return;
      }
    }
  }

  handleEqualsButton = () => {
    if (this.state.question.length === 0) return;
    let answer = ''
    try {
      answer = eval(this.state.question.join(''));
    } catch (err) {
      this.setState({
        displayVal: 'Error!',
        question: [],
        answer: null
      })
      return
    }
    if (answer === undefined) {
      this.setState({
        displayVal: 'Error!',
        question: [],
        answer: null
      })
    } else {
      this.setState({
        displayVal: answer,
        question: [],
        answer: answer
      });
      return
    }
  }

  handleSquareRootButton = () => {
    let display = this.state.displayVal;
    if (display === '0' || isNaN(display)) {
      return;
    } else {
      display = (Number(display) ** .5).toString();
      this.setState({
        displayVal: display,
        question: [],
        answer: display
      });
      return;
    }
  }

  handleBackspaceButton = () => {
    if (this.state.displayVal !== '0' && this.state.displayVal !== this.state.answer) {
      const questionCopy = this.state.question;
      questionCopy.pop();
      if (questionCopy.length === 0) {
        questionCopy.push('0');
      }
      this.setState({
        displayVal: questionCopy.join('').split(' ').join(''),
        question: questionCopy
      });
      return;
    }
    return;
  }

  render () {
    return (
      <div className='calcContainer'>
        <div className='calculator'>
          <Display val={this.state.displayVal} />
          <Keyboard
            keys={this.state.keys}
            onKeyPress={this.handleKeysClick}
            onClear={this.handleClearButton}
            onEquals={this.handleEqualsButton}
            onPlusMinus={this.handlePlusMinusButton}
            onBackSpace={this.handleBackspaceButton}
            onSquareRoot={this.handleSquareRootButton}
          />
        </div>
      </div>
    )
  }
}

export default Calculator

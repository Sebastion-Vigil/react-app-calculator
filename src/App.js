import React from 'react';
import Calculator from './components/Calculator';
import './css/App.css';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Calculator/>
      </div>
    )
  }
}

export default App;

// Exploring like this is fun, but I need to get 'er done
// I think I'm going to put each row of buttons in its own little flexbox div
// and then see where we can go from there. But darn, that seems convoluted--there has to be a better way

// okay so we're gonna try out CSS Grid
// yarn upgrade caniuse-lite browserslist yeah we gots to do that; check it out at the leastest
// word
// *w00t*
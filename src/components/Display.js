import React from 'react';
import '../css/Display.css';

import ScrollableFeed from 'react-scrollable-feed'
// for some reason the scroll doesn't work in Firefox
// but works fine in Chrome and Chromium
class Display extends React.Component {
    render() {
        return (
              <div className="display">
                  <ScrollableFeed>
                    <div className="display-digits">{this.props.val}</div>
                  </ScrollableFeed>
              </div>
        )
    }
}

export default Display;
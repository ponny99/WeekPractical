import React, { Component } from 'react';
import logo from './logo.svg';
import Playlist from './Music.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/736/3841820736_4f55328b-9e75-4456-b3dc-99611739761d.png?cb=1601627330" className="App-logo" alt="logo" />
          <h2>Welcome Ponatshego's musicplayer</h2>
        </div>
        <div class="col-xs-4">
          <Playlist />
        </div>

      </div>
    );
  }
}



export default App;

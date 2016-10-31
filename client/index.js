import React from 'react';
import { render } from 'react-dom';
import NavBar from './components/navbar';


class Main extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}

render(<Main/>, document.getElementById('main'));

import React, { Component } from 'react';
import { render } from 'react-dom';
import NavBar from './components/navbar';
import ProductList from './components/product-list';

class Main extends Component {
  render () {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <ProductList />
        </div>
      </div>
    )
  }
}

render(<Main/>, document.getElementById('main'));

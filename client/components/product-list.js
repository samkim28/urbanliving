import React, { Component } from 'react';
import { Link } from 'react-router';


class ProductList extends Component {

  render() {

    return(
      <div className="productList">
      {/* heading should be product category */}
        <h2>home interior</h2>
        {/* //should display products based on a specific product category */}
          <div className="product">test</div>
          <div className="product">test2</div>
          <div className="product">test3</div>
        <h2>kitchen</h2>
          <div className="product">test</div>
          <div className="product">test2</div>
          <div className="product">test3</div>
      </div>
    );
  }
}

export default ProductList;

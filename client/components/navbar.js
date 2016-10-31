import React, {Component} from 'react';
import { Link } from 'react-router';


class NavBar extends Component {

  render() {

    return(
        <nav className="navbar navbar-default navbar-fixed-top navbar-static-top">
          <div>
            <ul className="nav navbar-nav">
              <li className="navbar-right">Home</li>
              <form className="navbar-form navbar-right" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
                  <button type="submit" className="btn btn-default">Submit</button>
              </form>
              {/* <li className="navbar-right signout-button"><SignOut /></li> */}
            </ul>
          </div>
          <h1 className='text-left'>hip cat</h1>
        </nav>
    );
  }
}

export default NavBar;

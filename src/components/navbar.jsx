import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
          <div className="nav-contents">
            <a href="#a">
              <span className="logo">
                <i className="fas fa-leaf"></i>
              </span>
            </a>
            <h1>Habit Tracker</h1>
            <span className="habit-count total-count">
              {this.props.totalCount}
            </span>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;

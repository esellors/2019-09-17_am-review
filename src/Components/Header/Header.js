import React from 'react';
import './Header.css';
import NavModal from './NavModal/NavModal';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      displayModal: false
    }
  }
  toggleModal = () => {
    this.setState({displayModal: !this.state.displayModal})
  }
  render() {
    return (
      <div className='views'>
        <section id='Header'>
          <h1>Header</h1>
          <ul id='menu'>
            <li>
              <a href='#Header'>Home</a>
            </li>
            <li>
              <a href='#About'>About</a>
            </li>
            <li>
              <a href='#Contact'>Contact</a>
            </li>
          </ul>
          <h1 
            id='ham_menu_icon'
            onClick={this.toggleModal}
          >&#9776;</h1>

          {this.state.displayModal ? <NavModal toggleModal={this.toggleModal} /> : null}
        </section>
      </div>
    );
  }
}

export default Header;
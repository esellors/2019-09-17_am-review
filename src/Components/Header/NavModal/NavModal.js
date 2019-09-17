import React from 'react';
import './NavModal.css';

function NavModal(props) {
  return (
    <div 
      id='NavModal'
      onClick={props.toggleModal}
    >
      <ul id='ham_menu'>
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
    </div>
  );
}

export default NavModal;



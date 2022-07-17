import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

function Navbar() {
  return (
    <>
    <div className="Navbar">
      <Link to="#" className="menu-bars">
      <FaIcons.FaBars/>
      </Link>
    </div>
    </>
  );
}

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { AboutMenu } from './AboutMenu';
import '../../css/Dropdown.css';

function AboutDropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul onClick={handleClick}
        className={click ? 'main-dropdown-menu clicked' : 'main-dropdown-menu'}>
        {AboutMenu.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName}
                to={item.path} onClick={() =>
                setClick(false)}>
                  {item.title}
                </Link>
            </li>
          )
        })}
        
      </ul>
    </>
  )
}

export default AboutDropdown;

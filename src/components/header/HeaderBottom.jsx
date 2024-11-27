import React from 'react';
// import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const HeaderBottom = () => {
    return (
        <div className='headerBottom'>
            <div className='logo'>
                <h2 >PORTEN</h2>
            </div>
        <div className='headerBottom-Url'>
<p>dom</p>
<p>ser</p>
          {/* <p className='Home'><Link to={'/'}>Дом</Link></p>
          <p className='Personal'><Link to={'/personal-account'}>Личный кабинет</Link></p>
          <p className='Setting'><Link to={'/settings'}><IoSettingsSharp /></Link></p> */}
          {/* <p className='Like'><Link to={'/Like'}><FcLike /></Link></p>
          <p className='Card'><Link to={'/card'}><FontAwesomeIcon icon={faCartShopping} className="CardIcon" /></Link></p>
          <p className='Search'><Link to='/search'><FontAwesomeIcon icon={faMagnifyingGlass} className='SearchIcon' /></Link></p> */}
        </div>
        </div>
    );
}

export default HeaderBottom;

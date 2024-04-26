import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const {logout, user } = useAuth();
  return (
    <div>
     <div className="navbar bg-primary text-primary-content">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      { 
      user?
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/' className='text-black'>Home</Link></li>
        <li><Link to='/allTouristSpot' className='text-black'>All Tourist Spot</Link></li>
        <li>
          <a className='text-black'>Parent</a>
          <ul className="p-2">
            <li className='text-black'><a>Submenu 1</a></li>
            <li className='text-black'><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a className='text-black'>Item 3</a></li>
      </ul>
      :
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to='/' className='text-black'>Home</Link></li>
        <li><Link to='/allTouristSpot' className='text-black'>All Tourist Spot</Link></li>
          </ul>
      }
    </div>
    <Link to='/' className="btn btn-ghost text-xl">Explorex</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/allTouristSpot'>All Tourist Spot</Link></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li className='text-black'><a>Submenu 1</a></li>
            <li className='text-black'><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login' className="btn btn-error mr-5 px-8 text-white">Login</Link>
    <Link to='/register' className="btn btn-success px-7 text-white">Register</Link>
  </div>
</div>
    </div>
  );
};

export default Navbar;

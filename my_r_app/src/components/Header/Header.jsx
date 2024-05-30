import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Searching for the perfect book can feel like looking for a needle in a haystack. With millions of titles available, it's easy to get lost in the endless virtual shelves. But a well-designed search experience can make all the difference.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header
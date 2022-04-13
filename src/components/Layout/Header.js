import React, { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.header_color}>
          ToBer<span>Eats</span>
        </h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img
          src='https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
          alt='a table full of tasty food!'
        />
      </div>
    </Fragment>
  );
};

export default Header;

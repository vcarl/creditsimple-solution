import React, { PropTypes } from 'react';

const Link = ({children, navigate, href, currentScreen}) =>
  <a
    className={currentScreen === href ? 'active' : ''}
    href='#'
    onClick={navigate(href)}
  >
    {children}
  </a>

export default Link

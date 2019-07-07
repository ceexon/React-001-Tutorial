import React from 'react';

import ButtonCSS from './Button.css';

const button = (props) => (
  <button
      className={[ButtonCSS.Button, ButtonCSS[props.btnType]].join(' ')}
      onClick={props.clicked}
  >{props.children}</button>
);

export default button;

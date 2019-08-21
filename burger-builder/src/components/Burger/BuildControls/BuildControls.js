import React from 'react';

import BuildControlsCSS from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label:'Bacon', type:'bacon'},
  {label:'Cheese', type:'cheese'},
  {label:'Meat', type:'meat'},
  {label:'Salad', type:'salad'},
]

const buildControls = (props) => (
  <div className={BuildControlsCSS.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        type={ctrl.type}
        added={ () => props.ingredientAdded(ctrl.type) }
        removed={ () => props.ingredientRemoved(ctrl.type) }
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={BuildControlsCSS.OrderButton}
      disabled={!props.purchasable}
      onClick={props.orderNow}
    >ORDER NOW</button>
  </div>
);

export default buildControls;

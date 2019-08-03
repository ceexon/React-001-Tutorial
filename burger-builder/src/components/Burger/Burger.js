import React from 'react';

import BurgerCss from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    console.log(Array(props.ingredients));
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => ([...Array( props.ingredients[igKey] )].map( ( _, i ) => (
              <BurgerIngredient key={igKey + i} type={igKey} />
            ) )) )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={BurgerCss.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;

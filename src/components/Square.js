import React from 'react';
import '../index.css';

const Square = props => {
    let squareButton = "square";
    // if (props.index === 2) {
    //     squareButton = "square";        
    // }
    // else if (props.index === 0 || props.index === 1 || props.index === 3 || props.index === 4) {
    //     squareButton = "square square-col1"
    // }
    // else if (props.index === 7 || props.index === 6) {
    //     squareButton = "square square-middleBottom"
    // }
    // else if (props.index === 8 || props.index === 5) {
    //     squareButton = "square square-top"
    // }
    // else {squareButton = "square"};

    return (
        <button className={squareButton} onClick={props.onClick}>
            {props.value}
        </button>  
    );
  }

export default Square;
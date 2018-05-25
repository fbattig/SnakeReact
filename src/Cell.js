import React from 'react';
import cs from 'classnames';

const GRID_SIZE = 35;
const Cell =({x,y}) =>{

const cellClassName= cs('grid-cell',
 {
  'grid-cell-border':  (x === 0 || y === 0 || x === GRID_SIZE || y === GRID_SIZE)
 });
 
return <div className={cellClassName.join(' ')}>

</div>
}
export default Cell;
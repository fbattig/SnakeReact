import React from 'react';
import Row from './Row';


const GRID_SIZE = 35;
const GRID = [];

for (let i = 0; i < GRID_SIZE; i++) {
  GRID.push(i);
}


const Grid  = ()=>
<div>
  {GRID.map(y => 
  <Row 
    y={y}
    key = {y}
    />
  )}
</div>

export default Grid;
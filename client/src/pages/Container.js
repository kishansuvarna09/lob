import React, { useState, useCallback, memo } from 'react';

import { Dustbin } from './Dustbin';
import { Box } from './Box';
import { ItemTypes } from './ItemTypes';
import update from 'immutability-helper';

export const Container = memo(function Container() {
  const [dustbins, setDustbins] = useState([
    {
      accepts: 'caption',
      lastDroppedItem: null,
    },
    {
      accepts: 'paper',
      lastDroppedItem: null,
    },
  ]);
  const [boxes] = useState([
    {
      name: 'Bottle',
      type: ItemTypes.CAPTION,
      id: 0,
      text: 'This is a Bottle caption',
    },
    {
      name: 'Banana',
      type: ItemTypes.CAPTION,
      id: 1,
      text: 'This is a Banana caption',
    },
    {
      name: 'Magazine',
      type: ItemTypes.PAPER,
      id: 2,
      text: 'This is a Magazine caption',
    },
    {
      name: 'Ball',
      type: ItemTypes.CAPTION,
      id: 3,
      text: 'This is a Ball caption',
    },
  ]);
  const [droppedBoxNames, setDroppedBoxNames] = useState([]);
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }
  const handleDrop = useCallback(
    (index, item) => {
      console.log('item:', item);
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      );
      setDustbins(
        update(dustbins, {
          lastDroppedItem: {
            $set: item,
          },
        })
      );
    },
    [droppedBoxNames, dustbins]
  );
  return (
    <div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {dustbins.map(({ accepts, lastDroppedItem }, index) => (
          <Dustbin
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            key={index}
          />
        ))}
        {/* <Dustbin
          accept={dustbins.accepts}
          lastDroppedItem={dustbins.lastDroppedItem}
          onDrop={(item) => handleDrop(0, item)}
        /> */}
      </div>

      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {boxes.map(({ name, type, text }, index) => (
          <Box name={name} type={type} text={text} key={index} />
        ))}
      </div>
    </div>
  );
});

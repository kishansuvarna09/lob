import React from 'react';

import { statuses, data } from '../data/index';
import Dustbin from './Dustbin';
import Box from './Box';

const Homepage = (props) => {
  return (
    <div className="homepage__div">
      <div className="captions__div">
        {statuses.map((s) => {
          return (
            <div key={status} className="card__div">
              <h2>{s.status.toUpperCase()}</h2>
              <div>
                {/* {data
                  .filter((d) => d.status === s.status)
                  .map((item, index) => (
                    <Captions name={item.title} />
                  ))} */}

                <Box name="Green" />
                <Box name="Blue" />
                <Box name="Yellow" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="dropzone__div">
        <h1>Drop here</h1>
        <Dustbin id="drop__content__here" />
      </div>
    </div>
  );
};

export default Homepage;

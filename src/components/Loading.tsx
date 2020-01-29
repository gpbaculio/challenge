import React from 'react';

const loaderVideo = require('../assets/pulse.mp4');

const Loading = () => (
  <div className="m-auto" style={{ zIndex: 3 }}>
    <video className="videoTag" autoPlay loop muted>
      <source src={loaderVideo} type="video/mp4" />
    </video>
  </div>
);

export default Loading;

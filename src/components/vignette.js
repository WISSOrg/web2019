import React from 'react';

export default (props) => (
  <div style={{
    width: '100%',
    height: '100%',
    zIndex: `${props.zIndex}`,
    backgroundImage: 'radial-gradient(ellipse closest-corner at center, rgba(56, 61, 75, 0.0), rgba(56, 61, 75, 0.6))',
    position: 'absolute',
    top: '0%',
    left: '0%',
  }}>
  </div>
)

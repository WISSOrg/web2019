import React from 'react';

export default (props) => (
  <div style={{
    width: '100%',
    height: '100%',
    zIndex: `${props.zIndex}`,
    backgroundImage: 'linear-gradient(150deg, rgba(70, 60, 85, 0.85), rgba(5, 20, 30, 0.95))',
    backgroundSize: 'cover',
    position: 'absolute',
    top: '0%',
    left: '0%',
  }}>
  </div>
)

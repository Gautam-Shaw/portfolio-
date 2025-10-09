import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className='absolute'
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%,-50%)',
      }}
    >
      <div className='w-full h-full rounded-full opacity-20 bg-gradient-to-br from-[#5a29ae] to-[#9b0e55] blur-3xl animate-blob'></div>
    </div>
  );
};

// define prop types for validation
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlurBlob;
 
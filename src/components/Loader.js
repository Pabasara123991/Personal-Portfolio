import React from 'react';
import { PropagateLoader } from 'react-spinners';
import './Loader.css'; 
const Loader = ({ loading }) => {
  return (
    loading && (
      <div className="loader-container">
        <div className="loading-spinner">
          <PropagateLoader
            color={"#0047AB"} 
            loading={loading}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    )
  );
};

export default Loader;

import React from 'react';
import { Spinner } from 'reactstrap';

const Loader = ({ message }) => {
  return (
    <div className="loaderCustom">
      <div className="Fc">
        <Spinner style={{ zIndex: 9 }} />
      </div>
    </div>
  );
};

export default Loader;
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function Ratings({ value, setValue, id }) {
  const onChange = (event, newValue) => {
    setValue(id, newValue);
  };

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name={id} value={value} onChange={onChange} />
      </Box>
    </div>
  );
}

export default Ratings;

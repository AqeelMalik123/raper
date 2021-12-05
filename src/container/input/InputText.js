import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({label,type,value,onChange}) {
  return (
    
      <TextField value={value} onChange={onChange} fullWidth={true} id="outlined-basic" label={label} type={type} variant="outlined" />
     

  );
}

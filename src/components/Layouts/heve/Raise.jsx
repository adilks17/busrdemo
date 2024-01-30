import { Button, TextField } from '@mui/material'
import React from 'react'

const Raise = () => {
  return (
    <div>
        <TextField
          id="outlined-multiline-static"
          label="Ask"
          name='Ask'
          multiline
          rows={4}
          /> <br /><br />
           <Button variant="contained">Submit</Button>
        
    </div>
  )
}

export default Raise
import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'
import axios from 'axios';


const Heveedit = (props) => {
    var[inputs,setInputs]=useState(props.data)
    const inputHandler = (event) => {
        const { name, value } = event.target
        setInputs((inputs) => ({ ...inputs, [name]: value }))
       // console.log(inputs)
    }
    const addHandler=()=>{
        if(props.method==='put')
        {
            axios.put("http://localhost:3005/Heveedit/"+inputs._id,inputs)
            .then((response)=>{
                alert("Record updated")
                window.location.reload(false);
            })
            .catch(err=>console.log(err))
        }
    }


    const [textFieldWidth, setTextFieldWidth] = useState('100%');

    useEffect(() => {
      const handleResize = () => {
        // Set the maximum width to 650px
        const maxWidth = 650;
        // Calculate the width based on the window size
        const windowWidth = window.innerWidth;
        const width = windowWidth > maxWidth ? maxWidth : windowWidth;
        setTextFieldWidth(`${width}px`);
      };
  
      // Initial setup
      handleResize();
  
      // Attach the event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

  return (
   
    <div >
       
            <TextField
          id="standard-textarea"
          label="Heve"
          placeholder="Placeholder"
          multiline
          variant="standard"
          name='Leve'
          value={inputs.Leve}
        
          style={{ width: textFieldWidth }} 
        /><br /><br />
      

<TextField
          id="standard-textarea"
          label="Response"
          placeholder="Placeholder"
          multiline
          variant="standard"
          name='Response'
          value={inputs.Response}
          onChange={inputHandler}
          InputProps={{
            readOnly: true,
          }}
          style={{ width: textFieldWidth }} 
        />
        <br /><br />
        <Button variant="contained"onClick={addHandler}>Submit</Button>


      
    </div>
  )
}

export default Heveedit
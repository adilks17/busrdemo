import { Card, CardActions, CardContent,  Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Heveedit from './Heveedit';
import EditIcon from '@mui/icons-material/Edit';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
const QAComponent = () => {
    var [heve,setHeve]= useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3005/viewheve")
        .then(response =>{
            setHeve(response.data)
        })
        .catch(err=>console.log(err))
    },[])
    var [selected,setSelected]=useState();
    var [update,setUpdate]=useState(false);

    const updateValues = (value) =>{
      console.log("updated:",value)
      setSelected(value);
      setUpdate(true);
    }

    var result = <div>

    {heve.map((value,index)=>{
                    return(
                  
                      <Card sx={{ minWidth: 500 }} key={index}>
                      <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          Heve
                        </Typography>
                        <Typography variant="h5" component="div">
                          {value.Leve}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Responses
                        </Typography>
                        <Typography variant="body2">
                         {value.Response}
                        </Typography>
                      </CardContent>
                      <CardActions>
                       
                        {(value.Response!=='Not Responded') ? (
              <>
                <FavoriteBorderOutlinedIcon />
                <ThumbDownOffAltOutlinedIcon />
                <CardGiftcardOutlinedIcon/>
              </>
            ) :  <EditIcon onClick={()=>updateValues(value)} />}

                        
                      </CardActions>
                     
                    </Card>

                    
                    
                    )
                })}


    </div>



   if (update) {
    result=<Heveedit data={selected} method='put'/>
   }
  return (result)
}

export default QAComponent
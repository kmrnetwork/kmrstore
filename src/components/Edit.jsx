import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
export default function Edit() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        maxHeight: '80vh',  // Set a maximum height (80% of viewport height)
        overflowY: 'auto',  
      };
      let params=useParams();
    console.log(params)
    let nav=useNavigate();
   const [products,setProducts]=useState({})
    useEffect(()=>{
        let alldata=JSON.parse(localStorage.getItem("products"))
        let singleproduct=alldata.filter((item,index)=>{return index==params.id})
        
        setProducts(singleproduct[0])
    },[])
    
    const handleUpdate=()=>{
        let alldata=JSON.parse(localStorage.getItem("products"))
        alldata.splice(params.id,1,products)
        localStorage.setItem("products",JSON.stringify(alldata))
        nav("/view")
    }
    const handleChange=(e)=>{
        setProducts({...products,[e.target.name]:e.target.value})    
    }
  return (
    <div>
    <Box sx={style}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },textAlign:'center',
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="outlined-basic" name="name" value={products.name} label="Name" variant="outlined" onChange={handleChange}/>
      <TextField id="outlined-basic" name="price" value={products.price} label="Price" variant="outlined" onChange={handleChange}/>
      <TextField
          id="outlined-textarea"
          label="Description"
          value={products.description}
          onChange={handleChange}
          name="description"
          multiline
        />
        <TextField id="outlined-basic" name="image" value={products.image} label="Image URL" variant="outlined" onChange={handleChange}/>
        <Button variant="contained" color="primary" onClick={handleUpdate}>
      Update
    </Button><br/><br/>
    <Button variant="contained" color="primary"><Link to='/view' style={{color:"white",textDecoration:"none"}}>
      Cancel
      </Link>
    </Button>
        </Box>
    </Box>
    </div>
  )
}

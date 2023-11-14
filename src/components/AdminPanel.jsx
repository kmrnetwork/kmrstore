import { Box, Button, Modal } from '@mui/material'
import React, {useState } from 'react'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
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
export default function AdminPanel() {
  const [products,setProducts]=useState({
    name:"",
    price:"",
    description:"",
    image:""
})
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let initialvalue=localStorage.getItem("products")?JSON.parse(localStorage.getItem("products")):[]

    const [display,setDisplay]=useState(initialvalue)
  const handleChange = (e) => {
    setProducts({...products,[e.target.name]:e.target.value})
  };
  const handleSubmit=()=>{
    setDisplay([products,...display])
    let newDisplay=[products,...display]
    localStorage.setItem("products",JSON.stringify(newDisplay))
    handleClose()
 }
  return (
    <div style={{padding:'50px'}}>
    <br/>
    <div style={{textAlign:"center"}}>
      <Button variant='contained' onClick={handleOpen}>Add New Products</Button><br/><br/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },textAlign:'center',
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="outlined-basic" name="name" label="Name" variant="outlined" onChange={handleChange}/>
      <TextField id="outlined-basic" name="price" label="Price" variant="outlined" onChange={handleChange}/>
      <TextField
          id="outlined-textarea"
          label="Description"
          onChange={handleChange}
          name="description"
          multiline
        />
      <TextField id="outlined-basic" name="image" label="Image URL" variant="outlined" onChange={handleChange}/>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button><br/><br/>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Cancel
        </Button> 
    </Box>
        </Box>
      </Modal>
      <Button variant="contained" color="primary"><Link to="/view" style={{textDecoration:"none",color:"white"}}>View All Products</Link></Button>
    </div>
    
    </div>
    
  )
}

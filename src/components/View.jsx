import { Box, Button, Card, CardActions, CardContent, CardMedia, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function View() {
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
        
      };
    const [view,setView]=useState([])
    const [deleteIndex,setDeleteIndex]=useState();
    const [open, setOpen] = React.useState(false);
    const handleOpen = (index) =>{return( setOpen(true), setDeleteIndex(index))};
    const handleClose = () => setOpen(false);
    
        const Delete=()=>{
            let newView=view.filter((item,index)=>{return index!=deleteIndex})
            setView(newView);
            localStorage.setItem("products",JSON.stringify(newView))
            handleClose();
        }
        useEffect(()=>{
            setView(JSON.parse(localStorage.getItem("products")))},[])
            console.log(view)
  return (
    <div style={{padding:'50px'}}><br/>
    <div style={{textAlign:"center"}}>
    <Button variant='contained'><Link to="/adminpanel" style={{textDecoration:"none",color:"white"}}>Go Back</Link></Button>
    </div><br/>
    <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
    {view.map((product, index) => (
      <Card sx={{ maxWidth: 350, flex: '1 1 23%' }} key={index} style={{ margin: '8px' }}>
        {/*<CardMedia component="img" alt="Product Image" height="200px" image={product.image} />*/}
        <img style={{maxHeight:"300px"}} src={product.image} alt='product picture'/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="h6" color="text.primary">
            Price:₹{product.price}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
        <Button variant='contained' size="small"><Link to={`/detail/${index}`} style={{textDecoration:"none",color:"white"}}>
            View
            </Link>
          </Button>
        <Button variant='contained' size="small"><Link to={`/edit/${index}`} style={{textDecoration:"none",color:"white"}}>
            Edit
            </Link>
          </Button>
          <Button variant='contained' size="small" onClick={()=>handleOpen(index)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    ))}
  </div>
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Delete...
            are you sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           
          <Button  variant='contained' onClick={handleClose}>No</Button>
          <span style={{ margin: '0 10px' }}></span>
          <Button  variant='contained' onClick={Delete}>Yes</Button>
          </Typography>
          
        </Box>
      </Modal>
    </div>
  )
}

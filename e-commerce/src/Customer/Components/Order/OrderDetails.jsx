import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { deepPurple } from '@mui/material/colors';

const OrderDetails = () => {
  return (
    <div>
        <div className='px:5 lg:px-20'>
    <h1 className='font-bold text-lg py-7'></h1>
      <AddressCard/>
    </div>
    <div className='py-20'>
        <OrderTracker activeStep={3}/>
    </div>
    <Grid className='space-x-5' container>
        <Grid item container className='shadow-x1 rounded-md p-5 border'
        sx={{alignItems:"center",justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex items-center space-x-4'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src='' alt=''></img>
                    <div className='space-y-2 ml-5'>
                        <p className='font-semibold'>Men Slim Jeans</p>
                        <p className='space-x-5 opacity-50 text-sm'><span>Color : Black</span> <span>Size:M</span></p>
                        <p>Seller:Duke</p>
                        <p>₹1099</p>
                    </div>
                </div>
            </Grid>
            <Grid>
                <Box sx={{color:deepPurple[500]}}>
                    <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2'></StarBorderIcon>
                    <span>Rate & Review Product</span>
                </Box>
            </Grid>
        </Grid>
    </Grid>
    </div>
  )
}

export default OrderDetails

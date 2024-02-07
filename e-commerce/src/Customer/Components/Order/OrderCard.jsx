import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div className='p-5 shadow-md shadow-black hover:shadow-2xl'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src='' alt=''></img>
                <div className='ml-5 space-y-2'>
                    <p>
                        Men slim Jeans
                    </p>
                    <p className='opacity-50 text-xs font-semibold'>Size:M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color:Black</p>
                </div>
            </div>
        </Grid>
        <Grid item xs={2}>
            <p>₹1099</p>
        </Grid>
        <Grid item xs={4}>
            {true && <div><p><AdjustIcon className='text-green-600 mr-3 text-sm' sx={{width:"15px",height:"15px"}}/><span>Delivered on Jan 28</span></p><p className='text-xs'>Your Item Has Been Delivered</p></div>}
            {false && <p><span>Expected Delivery on Feb 10</span></p>}
            
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard

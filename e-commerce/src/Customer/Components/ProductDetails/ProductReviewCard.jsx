import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
            <Box>
                <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9c27b0"}}>R</Avatar>
            </Box>
        </Grid>
        <Grid items xs={9}>
            <div className='space-y-2'>
                <p className='font-semibold text-lg'>Ram</p>
                <p className='opacity-70 '>Feb 5,2024</p>
            </div>
            <Rating value={4.5} name='half-rating' readOnly precision={.5}></Rating>
                <p>This product is a game-changer, offering a seamless and efficient way to manage daily tasks. Its AI-based technology is intelligent, interactive, and self-learning, making it a valuable tool for any user. Highly recommend!
                </p>
            
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewCard

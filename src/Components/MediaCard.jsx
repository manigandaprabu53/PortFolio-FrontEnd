import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MediaCard({data}) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={data.thumbnail}
        title={data.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {data.description}
          <br /><br />
          Demo Account: 
          <br />
          Id: testuser@gmail.com
          <br />
          Password: Testpassword@123
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={data.githubFrontEnd} target='_blank'>GitHub Frontend</Button>
        <Button size="small" href={data.githubBackend} target='_blank'>GitHub Backend</Button>
        <Button size="small" href={data.livePage} target='_blank'>Live Page</Button>
      </CardActions>
    </Card> 
  )
}

export default MediaCard
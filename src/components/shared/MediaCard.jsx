// MediaCard.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'; // Import Link component from Next.js

export default function MediaCard({ imageUrl, cardName, link }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title={cardName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* Description goes here */}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={link} passHref>
          <Button size="small">Read More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

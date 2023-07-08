import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundImage: `url('https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?cs=srgb&dl=pexels-elia-clerici-912110.jpg&fm=jpg')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 300,
    color: 'white',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

const Weather = ({ city, weather, weatherDescription, temperature }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {city}
        </Typography>
        <Typography variant="body1">Weather: {weather}</Typography>
        <Typography variant="body1">Description: {weatherDescription}</Typography>
        <Typography variant="body1">Temperature: {temperature}</Typography>
      </CardContent>
    </Card>
  );
};

export default Weather;
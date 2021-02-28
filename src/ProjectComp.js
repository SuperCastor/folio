import { Card, CardContent, CardActions, Button, CardHeader, Typography, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import React from 'react';
import './ProjectComp.css';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 4,
    marginBottom: 4,
    marginTop: 4,
    maxWidth: 600,
    minWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function ProjectComp({ title, articleLink, imgLink, desc }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={title}
      />
      <CardMedia
        className={classes.media}
        image={imgLink}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={articleLink}>See more</Button>
      </CardActions>
    </Card>
  );
}
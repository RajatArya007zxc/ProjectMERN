import React, { useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import M from "./Assets/memories.png";
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";
import useStyles from "./style";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

export default function App() {
  /// For passing id

  const [currentId, setCurrentId] = useState(null);
  //

  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container>
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h2" align="center" className={classes.heading}>
          Memories
        </Typography>
        <img src={M} alt="mainImage" height="60" className={classes.image} />
      </AppBar>

      {/*  */}
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItem="stretch"
            spacing={3}
            className={classes.mainContainer}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

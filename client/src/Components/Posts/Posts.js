import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./style";
import { Grid, CircularProgress } from "@material-ui/core";

export default function Posts() {
  const classes = useStyles();

  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.mainContainer}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

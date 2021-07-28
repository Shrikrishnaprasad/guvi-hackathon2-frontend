import React from "react";
import { CssBaseline } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";

import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import TimeLine from "./TimeLine";
import Details from "./Details";
import ListContent from "./ListContent";
import ImageListContent from "./ImageListContent";

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…"
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  }
];

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <br />
          <TimeLine />
          <br />
          <Details />
          <ImageListContent />
          <br />
          <ListContent />
          <br />
        </main>
      </Container>
    </React.Fragment>
  );
}

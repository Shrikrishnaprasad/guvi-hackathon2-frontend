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
  title: "India's Largest Construction Equipment Inventory",
  description:
    " The contractor can register at Equipment Rentals India and increase his clientage, grow his business, and complete his construction projects on time. The miscellaneous construction equipment ranges from the heavy and portable and lighter equipment to make the job easier and quicker. Register with Equipment Rentals India to sell, purchase, rent, or hire the construction equipment..",
  image:
    "http://images.unsplash.com/photo-1526406915894-7bcd65f60845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8ZXF1aXBtZW50fHwwfHx8fDE2MjgzNDkzODE&ixlib=rb-1.2.1&q=80&w=1080",
  imgText: "main image description"
};

const featuredPosts = [
  {
    title: "All equipments at one place",
    description: ". ",
    image:
      "https://gentleninja.com/reviews/wp-content/uploads/2017/02/equipment-rental-software.jpg",
    imageText: "Image Text"
  },
  {
    title: "Delivering concreting equipments all over",
    description: "",
    image: "https://topmeaning.com/english/images/img/EN/e/equipment.jpg",
    imageText: "Image Text"
  },

  {
    title: "Terrific material lifting machines",
    description: "",
    image:
      "https://i.pinimg.com/originals/7f/15/e3/7f15e30f94d19e616f0f009a29a89ec8.jpg",
    imageText: "Image Text"
  },
  {
    title: "Sturdy earth digging equipments",
    description: "",
    image:
      "https://globalresearchreportnews.files.wordpress.com/2019/11/construction-equipment-rental-market.jpg",
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
          </Grid>
          <br />
          <br />
          <TimeLine />
          <br />
          <Details />
          <ImageListContent />
          <br />
          <br />
          <ListContent />
          <br />
        </main>
      </Container>
    </React.Fragment>
  );
}

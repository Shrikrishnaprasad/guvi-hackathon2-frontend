import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  imageList: {
    width: 1000,
    height: 700
  }
}));

const itemData = [
  {
    img:
      "https://mlyvwtn7rswg.i.optimole.com/ww5pdAM.fSHs~43dfc/w:auto/h:auto/q:55/https://equipment.cafe/wp-content/uploads/2021/05/EQC-Kameraverleih-Timecode-Ambient-Tentacle-Clockit-mieten.jpg",
    title: "Image",
    cols: 1,
    id: 1
  },
  {
    img:
      "https://mlyvwtn7rswg.i.optimole.com/ww5pdAM.fSHs~43dfc/w:441/h:441/q:55/dpr:1.1/https://equipment.cafe/wp-content/uploads/2021/05/Easy_Steady_Steadycam_System_1.jpg",
    title: "Image",
    cols: 2,
    id: 2
  },
  {
    img:
      "https://mlyvwtn7rswg.i.optimole.com/ww5pdAM.fSHs~43dfc/w:135/h:135/q:55/dpr:1.1/rt:fill/g:ce/https://equipment.cafe/wp-content/uploads/2021/05/Sony-DSC-RX100-Mark-IV.jpg",
    title: "Image",
    cols: 1,
    id: 3
  },
  {
    img:
      "https://mlyvwtn7rswg.i.optimole.com/ww5pdAM.fSHs~43dfc/w:300/h:300/q:55/rt:fill/g:ce/https://equipment.cafe/wp-content/uploads/2021/05/1422-screw-long.jpg",
    title: "Image",
    cols: 1,
    id: 4
  },
  {
    img:
      "https://equipment.cafe/wp-content/uploads/2021/05/Eachshot-DZ-AMK1-Swivel-Arm-Mount-14%E2%80%B3.jpg",
    title: "Image",
    cols: 1,
    id: 5
  },
  {
    img:
      "https://mlyvwtn7rswg.i.optimole.com/ww5pdAM.fSHs~43dfc/w:210/h:210/q:55/dpr:1.1/https://equipment.cafe/wp-content/uploads/2021/05/EQC-Kameraverleih-Stativ-mieten.jpg",
    title: "Image",
    cols: 1,
    id: 6
  },
  {
    img:
      "https://mlyvwtn7rswg.i.optimole.com/ww5pdAM.fSHs~43dfc/w:210/h:210/q:55/dpr:1.1/https://equipment.cafe/wp-content/uploads/2021/05/GFM-Quad-Dolly-with-components.jpg",
    title: "Image",
    cols: 2,
    id: 7
  },
  {
    img:
      "https://mlyvwtn7rswg.i.optimole.com/ww5pdAM.fSHs~43dfc/w:441/h:441/q:55/dpr:1.1/https://equipment.cafe/wp-content/uploads/2021/05/GFM-AL-2212-Seat-Arm-Vertical-20cm.jpg",
    title: "Image",
    cols: 2,
    id: 8
  },
  {
    img:
      "https://mlyvwtn7rswg.i.optimole.com/ww5pdAM.fSHs~43dfc/w:auto/h:auto/q:55/https://equipment.cafe/wp-content/uploads/2021/05/EQC-4191.jpg",
    title: "Image",
    cols: 1,
    id: 9
  },
  {
    img:
      "https://mlyvwtn7rswg.i.optimole.com/ww5pdAM.fSHs~43dfc/w:210/h:210/q:55/dpr:1.1/https://equipment.cafe/wp-content/uploads/2021/05/Arri-Arrisun-2-200W-HMI-Lamp.jpg",
    title: "Image",
    cols: 2,
    id: 10
  },
  {
    img:
      "https://mlyvwtn7rswg.i.optimole.com/ww5pdAM.fSHs~43dfc/w:135/h:135/q:55/dpr:1.1/rt:fill/g:ce/https://equipment.cafe/wp-content/uploads/2021/05/Sony-DSC-RX100-Mark-IV.jpg",
    title: "Image",
    cols: 1,
    id: 11
  }
];
export default function ImageListContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={240} className={classes.imageList} cols={3}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.id}
            cols={item.cols || 1}
            style={{ padding: "5px" }}
          >
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

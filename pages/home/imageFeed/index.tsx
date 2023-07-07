import React from "react";
import { useRouter } from "next/router";
import { ImageProps } from "../../../Interface";

import ImageView from "./imageGrid";
// import ImageView from "../../components/ImageCarousel";
import styles from "../../../styles/imageFeed.module.css";
import { Typography, Pagination } from "@mui/material";

const ImageFeed: React.FC<ImageProps> = ({ characters, page, totalPages }) => {
  const router = useRouter();

  // handle pagination router
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    router.push(`/?page=${newPage}`);
  };

  return (
    <div>
      <div className={styles.home}>
        <Typography variant="h5" component="div" align="center">
          Rick and Morty Characters
        </Typography>
        <ImageView characters={characters} />
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          shape="circular"
          showFirstButton
          showLastButton
          size="small"
        />
      </div>
    </div>
  );
};

export default ImageFeed;

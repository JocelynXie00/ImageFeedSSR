import React, { useState } from "react";
import { useRouter } from "next/router";
import { ImageProps } from "../../../Interface";

import ImageGrid from "./imageGrid";
import ImageCarousel from "./imageCarousel";
import styles from "../../../styles/imageFeed.module.css";
import { Typography, Pagination } from "@mui/material";

const ImageFeed: React.FC<ImageProps> = ({ characters, page, totalPages }) => {
  const router = useRouter();
  const [targetView, setTargetView] = useState("carousel");
  // handle pagination router
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    router.push(`/?page=${newPage}`);
  };

  return (
    <div>
      <button
        onClick={() => {
          setTargetView(targetView === "carousel" ? "grid" : "carousel");
        }}
      >
        Switch to {targetView} view
      </button>
      <div className={styles.home}>
        <Typography variant="h5" component="div" align="center">
          Rick and Morty Characters
        </Typography>

        {targetView === "carousel" ? (
          <ImageGrid characters={characters} />
        ) : (
          <ImageCarousel characters={characters} />
        )}
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

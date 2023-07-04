import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ImageProps } from "../../Interface/interfaces";

import styles from "../../styles/ImageFeedPage.module.css";
import { Grid, Paper, Box, Typography, Pagination } from "@mui/material";

const ImageFeed: React.FC<ImageProps> = ({ characters, page, totalPages }) => {
  const router = useRouter();

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    router.push(`/?page=${newPage}`);
  };

  return (
    <div className={styles.home}>
      <Typography variant="h5" component="div" align="center">
        Rick and Morty Characters
      </Typography>
      <Grid container spacing={3}>
        {characters &&
          characters.map((characterInfo) => (
            <Grid item xs={12} sm={6} md={3} key={characterInfo.id}>
              <Paper elevation={8}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "#1b5e20",
                      transform: "scale(1.08)",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: 0,
                      paddingTop: "100%",
                    }}
                  >
                    <Image
                      src={characterInfo.image}
                      alt={characterInfo.name}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={characterInfo.image}
                    />
                  </Box>
                  <Box p={2}>
                    <Typography variant="subtitle1" align="center">
                      {characterInfo.name}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
      </Grid>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        shape="circular"
        showFirstButton
        showLastButton
        size="large"
      />
      <Typography variant="h6" component="div" align="center">
        <span>&copy;</span> Lynne Xie
      </Typography>
    </div>
  );
};

export default ImageFeed;

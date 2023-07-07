import React from "react";
import Image from "next/image";
import { CharacterInfo } from "../../../Interface";
import { Paper, Box, Typography } from "@mui/material";
import styles from "../../../styles/Character.module.css";
const Character: React.FC<CharacterInfo> = ({ id, name, image }) => {
  return (
    <Paper className={styles.container} elevation={8}>
      <Box
        sx={{
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "#1b5e20",
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
            src={image}
            alt={name}
            fill={true}
            placeholder="blur"
            blurDataURL={image}
          />
        </Box>
        <Box p={2}>
          <Typography variant="subtitle1" align="center">
            {name}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
export default Character;

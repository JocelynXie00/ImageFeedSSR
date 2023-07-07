import React from "react";
import { Characters } from "../../../../Interface";

import { Grid } from "@mui/material";
import Character from "@/pages/components/character";

const ImageGrid: React.FC<Characters> = ({ characters }) => {
  return (
    <Grid container spacing={6}>
      {characters &&
        characters.map((characterInfo) => (
          <Grid item xs={12} sm={6} md={3} key={characterInfo.id}>
            <Character
              id={characterInfo.id}
              name={characterInfo.name}
              image={characterInfo.image}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default ImageGrid;

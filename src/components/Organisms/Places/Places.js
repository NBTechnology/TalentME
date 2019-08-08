import React from "react";
import Button from "components/Atoms/Button/Button";
import { Grid } from "@material-ui/core";

const Places = props => {
  const places = props.places.map(place => {
    return (
      <Grid item xs={6} md={2} key={place.id}>
        <div >
          <Button
            variant="image"
            gradient
            // width={props.widthButton}
            height={props.heightButton}
            bg={place.image}
            isBold
            letterSpacing={props.letterSpacingButton}
            fontSize={props.fontSizeButton}
            link={place.link}
          >
            {place.label}
          </Button>
        </div>
      </Grid>
    );
  });
  return (
    <Grid container justify="center" spacing={2}>
      {/* <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "48px"
      }}
    > */}
      {places}
      {/* </div> */}
    </Grid>
  );
};

export default Places;

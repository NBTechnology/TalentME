import React from "react";
import Card from "components/Organisms/Card/Card";
import Text from "components/Atoms/Text/Text";
import { Grid } from "@material-ui/core";

const Requisites = props => {
  const contentRequisites = props.data.map(requisite => {
    return (
      <Grid item xs={12} md={4}>
        <Card
          variant="cardRequisite"
          key={requisite.id}
          title={requisite.title}
          url={requisite.url}
          text={requisite.text}
        />
      </Grid>
    );
  });
  return (
    <Grid container justify="center">
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Text variant="h2">¿Qué requisitos debes cumplir?</Text>
      </Grid>
      {contentRequisites}
    </Grid>
  );
};

export default Requisites;

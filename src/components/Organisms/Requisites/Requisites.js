import React from "react";
import Card from "components/Organisms/Card/Card";
import Text from "components/Atoms/Text/Text";

const Requisites = props => {
  const contentRequisites = props.data.map(requisite => {
    return (
      <Card
        variant="cardRequisite"
        key={requisite.id}
        title={requisite.title}
        url={requisite.url}
        text={requisite.text}
      />
    );
  });
  return (
    <div
      style={{
        position: "relative",
        top: "48px",
        width: "80%",
        marginLeft: "10%",
        marginBottom: "48px"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Text variant="h2">¿Qué requisitos debes cumplir?</Text>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        {contentRequisites}
      </div>
    </div>
  );
};

export default Requisites;

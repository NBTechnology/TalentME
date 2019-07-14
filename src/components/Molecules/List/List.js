import React from "react";
import Text from "components/Atoms/Text/Text";

const List = props => {
  const items = props.items.map(item => {
    return (
      <Text variant="customize" color="#9FA3A7" margin="12px 0 0 0">
        {item}
      </Text>
    );
  });
  return (
    <div>
      <Text variant="customize" isBold color="#fff">
        {props.title}
      </Text>
      {items}
    </div>
  );
};

export default List;

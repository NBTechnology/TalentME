import React from "react";
import Text from "components/Atoms/Text/Text";

const List = props => {
  const items = props.items.map(item => {
    return (
      <Text variant="customize" color="#9FA3A7">
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
